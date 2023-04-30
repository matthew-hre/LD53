import Photocopy from "./photocopy.jpg";
import "./App.css";
import Footer from "./Footer";
import Transcript from "./Transcript.jsx";
import Email from "./Email";

import { useState, useEffect, useRef } from "react";

import introData from "./content/messages/intro.jsx";
import firstMessageData from "./content/messages/firstMessage.jsx";
import secondMessageData from "./content/messages/secondMessage.jsx";
import thirdMessageData from "./content/messages/thirdMessage.jsx";
import fourthMessageData from "./content/messages/fourthMessage.jsx";
import fifthMessageData from "./content/messages/fifthMessage.jsx";
import sixthMessageData from "./content/messages/sixthMessage.jsx";
import seventhMessageData from "./content/messages/seventhMessage.jsx";
import eighthMessageData from "./content/messages/eighthMessage.jsx";
import badEndingData from "./content/messages/badEndingMessage.jsx";
import goodEndingData from "./content/messages/goodEndingMessage.jsx";

import firstEmail from "./content/emails/firstEmail.jsx";
import secondEmail from "./content/emails/secondEmail.jsx";
import thirdEmail from "./content/emails/thirdEmail.jsx";
import fourthEmail from "./content/emails/fourthEmail.jsx";
import fifthEmail from "./content/emails/fifthEmail.jsx";
import sixthEmail from "./content/emails/sixthEmail.jsx";
import lastEmail from "./content/emails/lastEmail.jsx";

function App() {
  const [messages, setMessages] = useState([]);

  const [audioEnabled, setAudioEnabled] = useState(false);

  const [currentData, setCurrentData] = useState(introData);
  const [currentEmail, setCurrentEmail] = useState(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [awaitingInput, setAwaitingInput] = useState(false);

  const [currentKey, setCurrentKey] = useState("");
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const [confessionBalance, setConfessionBalance] = useState(0);

  let [userName, setUserName] = useState("");

  const intervalIdRef = useRef(null);

  const onAnswer = (answer) => {
    if (!awaitingInput) {
      return;
    }

    if (currentData[currentMessageIndex - 1].type === "value") {
      if (currentData[currentMessageIndex - 1].id === 2) {
        setUserName(toTitleCase(answer));
      }
    }

    if (currentData[currentMessageIndex].type === "result") {
      if (currentAnswerIndex === -1) {
        getKeyInputFromUser(answer);
      } else {
        if (
          answer !== "" + currentAnswerIndex &&
          answer.toLowerCase() !== currentAnswer.toLowerCase() &&
          currentAnswerIndex !== 1000
        ) {
          const newMessage = {
            message: "Incorrect. Again.",
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        } else {
          let newMessage = {
            message: "",
          };

          let newCurrentAnswer = "";

          if (currentAnswerIndex === 1000) {
            // get the full key data from the email
            let fullKeyData = null;
            currentEmail.keys.find((key) => {
              if (key.key === currentKey) {
                fullKeyData = key;
              }
            });

            // is answer a number?
            if (!isNaN(answer)) {
              const idx = Number(answer) - 1;
              if (idx < 0 || idx >= fullKeyData.values.length) {
                newMessage.message = "Incorrect. Again.";
                setMessages((prevMessages) => [...prevMessages, newMessage]);
                return;
              }
              setCurrentAnswer(fullKeyData.values[idx]);
              newCurrentAnswer = fullKeyData.values[idx];
            } else {
              for (let i = 0; i < fullKeyData.values.length; i++) {
                if (
                  answer.toLowerCase() === fullKeyData.values[i].toLowerCase()
                ) {
                  setCurrentAnswer(fullKeyData.values[i]);
                }
              }
            }

            if (newCurrentAnswer === fullKeyData.good) {
              setConfessionBalance(confessionBalance + 1);
              console.log("confession balance: " + confessionBalance);
            } else if (newCurrentAnswer === fullKeyData.bad) {
              setConfessionBalance(confessionBalance - 1);
              console.log("confession balance: " + confessionBalance);
            }

            if (fullKeyData === null) {
              newMessage.message = "Incorrect. Again.";
              setMessages((prevMessages) => [...prevMessages, newMessage]);
              return;
            }
          }

          newMessage.message = "Input verified.";

          document.getElementById(currentKey).innerText =
            newCurrentAnswer === "" ? currentAnswer : newCurrentAnswer;

          // remove the key from the email
          currentEmail.keys = currentEmail.keys.filter(
            (key) => key.key !== currentKey
          );

          setMessages((prevMessages) => [...prevMessages, newMessage]);
          setCurrentAnswerIndex(-1);
          setCurrentKey("");
          setCurrentAnswer("");

          // if there are no more keys, we're done
          if (currentEmail.keys.length === 0) {
            if (currentData === eighthMessageData) {
              if (confessionBalance < 2) {
                loadChapter(badEndingData, null);
              } else {
                loadChapter(goodEndingData, null);
              }
            }

            console.log("no more keys");
            switch (currentData) {
              case firstMessageData:
                loadChapter(secondMessageData, secondEmail);
                break;
              case secondMessageData:
                loadChapter(thirdMessageData, thirdEmail);
                break;
              case thirdMessageData:
                loadChapter(fourthMessageData, fourthEmail);
                break;
              case fourthMessageData:
                loadChapter(fifthMessageData, fifthEmail);
                break;
              case fifthMessageData:
                loadChapter(sixthMessageData, sixthEmail);
                break;
              case sixthMessageData:
                loadChapter(seventhMessageData, null);
                break;
              default:
                break;
            }
          }
        }
      }
    }

    if (currentData[currentMessageIndex - 1].type === "yn") {
      const newMessage = currentData[currentMessageIndex - 1];
      let copyOfNewMessage = { ...newMessage };

      if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
        copyOfNewMessage.message = copyOfNewMessage.yes;
        setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        if (currentData[currentMessageIndex - 1].id === 4) {
          setAudioEnabled(true);
        }
      } else if (
        answer.toLowerCase() === "n" ||
        answer.toLowerCase() === "no"
      ) {
        copyOfNewMessage.message = copyOfNewMessage.no;
        setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        if (currentData[currentMessageIndex - 1].id === 4) {
          setAudioEnabled(false);
        }
      } else {
        copyOfNewMessage.message = "Invalid inputs will be assumed as yes.";
        setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        if (currentData[currentMessageIndex - 1].id === 4) {
          setAudioEnabled(true);
        }
      }
    }
    setAwaitingInput(false);
  };

  const getKeyInputFromUser = (answer) => {
    let foundKey = false;
    currentEmail.keys.forEach((key) => {
      if (key.key === answer) {
        foundKey = true;
        const options = [
          {
            message: "This data has been corrupted. The possible data is:",
          },
        ];

        key.values = shuffle(key.values);

        let i = 0;
        key.values.forEach((value) => {
          i++;
          if (value === key.valid) {
            setCurrentAnswerIndex(i);
          }
          options.push({
            message: "(" + i + ") " + value.replace("{USER}", userName),
          });
        });
        setMessages((prevMessages) => [...prevMessages, ...options]);
        setCurrentKey(key.key);
        // if last email
        if (currentData !== eighthMessageData) {
          setCurrentAnswer(key.valid);
        } else {
          setCurrentAnswer("");
          setCurrentAnswerIndex(1000);
          foundKey = true;
        }
      }
    });

    if (!foundKey) {
      const message = {
        message: "That's not a valid key.",
      };
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  useEffect(() => {
    if (!awaitingInput) {
      const intervalId = setInterval(() => {
        if (currentMessageIndex < currentData.length - 1) {
          const newMessage = currentData[currentMessageIndex];
          newMessage.message = newMessage.message.replace("{USER}", userName);
          setMessages((prevMessages) => [...prevMessages, newMessage]);

          if (newMessage.type === "value" || newMessage.type === "yn") {
            setAwaitingInput(true);
          }

          setCurrentMessageIndex(currentMessageIndex + 1);
        } else {
          clearInterval(intervalId);

          if (currentData !== introData) {
            setAwaitingInput(true);
          }

          if (currentData === introData) {
            setCurrentData(firstMessageData);
            setCurrentMessageIndex(0);
            setMessages([]);

            setCurrentEmail(firstEmail);
          }

          if (currentData === seventhMessageData) {
            setCurrentData(eighthMessageData);
            setCurrentMessageIndex(1);
            setMessages([]);

            setCurrentEmail(lastEmail);
          }
        }
      }, currentData[currentMessageIndex - 1]?.delay || 250);
      intervalIdRef.current = intervalId;
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [messages, currentMessageIndex, currentData, userName, awaitingInput]);

  useEffect(() => {
    if (awaitingInput) {
      document.getElementById("transcript-input").focus();
    }
  }, [awaitingInput]);

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function loadChapter(data, email) {
    setCurrentData(data);
    setCurrentMessageIndex(0);
    setMessages([]);

    setCurrentEmail(email);
  }

  return (
    <>
      <img src={Photocopy} alt="" className="photocopy" />
      <div className="screen">
        <div className="flex-row">
          <Transcript
            messages={messages}
            onAnswer={onAnswer}
            audioEnabled={audioEnabled}
            awaitingInput={awaitingInput}
          />
          <Email email={currentEmail} userName={userName} />
        </div>
        <Footer audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
      </div>
    </>
  );
}

export default App;

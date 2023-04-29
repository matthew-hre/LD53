import Photocopy from "./assets/photocopy.jpg";
import "./App.css";
import Footer from "./Footer";
import Transcript from "./Transcript.jsx";
import Email from "./Email";

import { useState, useEffect, useRef } from "react";

import introData from "./content/intro.jsx";
import firstMessageData from "./content/firstMessage.jsx";
import secondMessageData from "./content/secondMessage.jsx";

import firstEmail from "./content/firstEmail.jsx";
import secondEmail from "./content/secondEmail.jsx";

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

  let [userName, setUserName] = useState("");

  const intervalIdRef = useRef(null);

  const onAnswer = (answer) => {
    if (awaitingInput) {
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
            answer.toLowerCase() !== currentAnswer.toLowerCase()
          ) {
            const newMessage = {
              message: "Incorrect. Again.",
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setCurrentAnswerIndex(-1);
            setCurrentKey("");
            setCurrentAnswer("");
          } else {
            const newMessage = {
              message: "Input verified.",
            };

            document.getElementById(currentKey).innerText = currentAnswer;

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
              if (currentData === firstMessageData) {
                setCurrentData(secondMessageData);
                setCurrentMessageIndex(0);
                setMessages([]);

                setCurrentEmail(secondEmail);
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
        } else if (
          answer.toLowerCase() === "n" ||
          answer.toLowerCase() === "no"
        ) {
          copyOfNewMessage.message = copyOfNewMessage.no;
          setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        } else {
          copyOfNewMessage.message = "Invalid inputs will be assumed as yes.";
          setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        }
      }

      setAwaitingInput(false);
    }
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
        setCurrentAnswer(key.valid);
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
          <Email email={currentEmail} />
        </div>
        <Footer audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
      </div>
    </>
  );
}

export default App;

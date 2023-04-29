import Photocopy from "./assets/photocopy.jpg";
import "./App.css";
import Footer from "./Footer";
import Transcript from "./Transcript.jsx";
import Email from "./Email";

import { useState, useEffect, useRef } from "react";

import introData from "./content/intro.jsx";
import firstMessageData from "./content/firstMessage.jsx";

function App() {
  const [messages, setMessages] = useState([]);

  const [currentData, setCurrentData] = useState(introData);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [awaitingInput, setAwaitingInput] = useState(false);

  let [userName, setUserName] = useState("");

  const intervalIdRef = useRef(null);

  const onAnswer = (answer) => {
    if (awaitingInput) {
      if (currentData[currentMessageIndex - 1].type === "value") {
        if (currentData[currentMessageIndex - 1].id === 2) {
          setUserName(answer);
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
          setMessages((prevMessages) => [...prevMessages, copyOfNewMessage]);
        }
      }

      setAwaitingInput(false);
    }
  };

  useEffect(() => {
    if (!awaitingInput) {
      const intervalId = setInterval(() => {
        const newMessage = currentData[currentMessageIndex];
        newMessage.message = newMessage.message.replace("{USER}", userName);
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        if (newMessage.type === "value" || newMessage.type === "yn") {
          setAwaitingInput(true);
        }

        if (currentMessageIndex < currentData.length - 1) {
          setCurrentMessageIndex(currentMessageIndex + 1);
        } else {
          clearInterval(intervalId);
          console.log("done");

          if (currentData === introData) {
            setCurrentData(firstMessageData);
            setCurrentMessageIndex(0);
            setMessages([]);
          }
        }
      }, currentData[currentMessageIndex - 1]?.delay || 200);
      intervalIdRef.current = intervalId;
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [messages, currentMessageIndex, currentData, userName, awaitingInput]);

  return (
    <>
      <img src={Photocopy} alt="" className="photocopy" />
      <div className="screen">
        <div className="flex-row">
          <Transcript messages={messages} onAnswer={onAnswer} />
          <Email />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

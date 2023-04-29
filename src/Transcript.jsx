import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import NewMessage from "./assets/new message.wav";
import Typing from "./assets/typing.wav";

function Transcript({ messages, onAnswer, awaitingInput, audioEnabled }) {
  const transcriptRef = useRef(null);

  useEffect(() => {
    const transcript = document.getElementsByClassName("messages")[0];
    transcript.scrollTop = transcript.scrollHeight;

    if (audioEnabled) {
      const audio = new Audio(NewMessage);
      audio.volume = 0.4;
      audio.play();
    }
  }, [messages, audioEnabled]);

  return (
    <fieldset id="transcript" ref={transcriptRef}>
      <legend>Transcript</legend>
      <div className="messages">
        {messages.map((message, index) => {
          return (
            <div className="transcript-message" key={index}>
              {message.message.replace(/\n/g, "<br />")}
            </div>
          );
        })}
      </div>

      <input
        type="text"
        className="transcript-input"
        id="transcript-input"
        placeholder=">"
        onKeyDown={(e) => {
          if (e.key === "Enter" && awaitingInput) {
            onAnswer(e.target.value);
            e.target.value = "";
          }

          if (
            audioEnabled &&
            e.key !== "Enter" &&
            e.key !== "Backspace" &&
            e.key !== "Shift" &&
            e.key !== "LeftControl" &&
            e.key !== "Alt"
          ) {
            const audio = new Audio(Typing);
            audio.volume = 0.4;
            audio.play();
          }
        }}
      />
    </fieldset>
  );
}

Transcript.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnswer: PropTypes.func.isRequired,
  awaitingInput: PropTypes.bool.isRequired,
  audioEnabled: PropTypes.bool.isRequired,
};

export default Transcript;

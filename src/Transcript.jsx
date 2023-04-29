import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function Transcript({ messages, onAnswer }) {
  const transcriptRef = useRef(null);

  useEffect(() => {
    const transcript = document.getElementById("transcript");
    transcript.scrollTop = transcript.scrollHeight + 100;
  }, [messages]);

  return (
    <fieldset id="transcript" ref={transcriptRef}>
      <legend>Transcript</legend>
      <div className="messages">
        {messages.map((message, index) => {
          return (
            <div className="transcript-message" key={index}>
              {message.message}
            </div>
          );
        })}
      </div>

      <input
        type="text"
        className="transcript-input"
        placeholder=">"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAnswer(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </fieldset>
  );
}

Transcript.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnswer: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export default Transcript;

import staticSound from "./assets/static.mp3";
import PropTypes from "prop-types";

import { useEffect, useRef } from "react";

function AudioPlayer({ enabled }) {
  // ref
  const audioRef = useRef(null);

  useEffect(() => {
    if (enabled) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [enabled]);

  return (
    // a little quieter
    <audio loop={true} ref={audioRef}>
      <source src={staticSound} type="audio/mpeg" />
    </audio>
  );
}

AudioPlayer.propTypes = {
  enabled: PropTypes.bool,
};

export default AudioPlayer;

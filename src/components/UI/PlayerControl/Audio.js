import React from "react";
import classes from "./Audio.module.css";

const Audio = (props) => {
  const ayahInQuran = props.ayah;
  const shikhName = props.shikhName;
  const url = `https://cdn.islamic.network/quran/audio/128/${shikhName}/${ayahInQuran}.mp3`;
  return (
    <div className={classes["audio-player"]}>
      <audio controls src={url}></audio>
    </div>
  );
};

export default Audio;

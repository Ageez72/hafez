import React, {useState} from "react";
import Audio from "./Audio";
import Shikh from "./Shikh";
import "./PlayerControl.css";
function Player(props) {
  const [shikhName, setShikhName] = useState("ar.alafasy");
  const ayahInQuran = props.ayahInQuran;
  const shikhNameHandler = (name) => {
    setShikhName(name);
  };
  return (
    <div className="player-control">
      <Shikh getShikhName={shikhNameHandler} />
      <Audio ayah={ayahInQuran} shikhName={shikhName} />
    </div>
  );
}

export default Player;

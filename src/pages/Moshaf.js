import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Surah from "../components/UI/Surah/Surah";
import mecca from "../assets/imgs/mecca.png";
import madina from "../assets/imgs/madina.png";
import axios from "axios";
import "./style/moshaf.scss";
function Moshaf() {
  const url = "https://api.alquran.cloud/v1/surah";
  const [surahList, setSurahList] = useState([]);
  const [surahStatus, setSurahStatus] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState(1);
  useEffect(() => {
    getSurahList();
  }, []);
  const getSurahList = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        const list = res.data.data;
        setSurahList(list);
      })
      .catch((err) => console.log(err));
  };
  const getSurahNumber = (e) => {
    if (!e.target.dataset.number) {
      setSelectedSurah(e.target.closest(".surah-info").dataset.number);
      setSurahStatus(true);
      document.body.classList.add("overflow-hidden");
      document.getElementById("modal").classList.add("open");
    }
  };
  const surahListNames = surahList.map((surah) => (
    <div
      className="surah-info"
      key={surah.number}
      data-number={surah.number}
      onClick={getSurahNumber}
    >
      <div className="surah-number">{surah.number}</div>
      <div className="surah-en-info">
        <h2 className="en-name">{surah.englishName}</h2>
        <div className="extra-info">
          <span className="en-translation-name">
            {surah.englishNameTranslation}
          </span>
          <img
            className="surah-place"
            src={surah.revelationType === "Meccan" ? mecca : madina}
            alt={surah.revelationType === "Meccan" ? mecca : madina}
          />
        </div>
      </div>
      <div className="surah-ar-info" dir="rtl">
        <h3 className="ar-name">{surah.name}</h3>
      </div>
    </div>
  ));
  return (
    <div className="moshaf-container">
      {surahStatus && <Surah surahNumber={selectedSurah} />}
      {surahListNames}
    </div>
  );
}

export default Moshaf;

import React, { useState, useEffect, Fragment } from "react";
import Modal from "../Modal/Modal";
import SurahInfo from "./SurahInfo";
import axios from "axios";
import basmallah from "../../../assets/imgs/bismillah3.png";
import "./Surah.scss";
function Surah(props) {
  const [surah, setSurah] = useState([]);
  const [surahName, setSurahName] = useState({});
  const url = `https://api.alquran.cloud/v1/surah/${props.surahNumber}`;
  useEffect(() => {
    getSurah();
  }, [props.surahNumber]);
  const getSurah = () => {
    axios
      .get(url)
      .then((res) => {
        const allVerses = res.data.data.ayahs;
        const name = res.data.data.name;
        setSurah(allVerses);
        setSurahName(name);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const getAyahInfo = (e) => {
    // Clear highlight class before add it to the current ayah
    const elements = e.target.parentNode.children;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("highlight");
    }
    e.target.previousSibling.classList.add("highlight");
  };
  const getSurahData =
    surah.length > 0 &&
    surah.map((verse, index) => (
      <Fragment key={verse.numberInSurah}>
        <span
          data-verse-surah={verse.numberInSurah}
          data-verse-quran={verse.number}
        >
          {index === 0
            ? verse.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")
            : verse.text}
        </span>
        <span
          className="ayah"
          data-ayah={verse.numberInSurah}
          data-verse-quran={verse.number}
          onClick={getAyahInfo}
        >
          {verse.numberInSurah}
        </span>
      </Fragment>
    ));

  return (
    <Modal>
      <SurahInfo number={props.surahNumber} name={surahName} />
      <div className="surah-container" dir="rtl">
        <img className="basmallah" src={basmallah} alt="basmallah" />
        {getSurahData}
      </div>
    </Modal>
  );
}

export default Surah;

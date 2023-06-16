import React, { Fragment } from "react";
import basmallah from "../../../assets/imgs/bismillah2.png";

import "./Surah.css";
const Surah = (props) => {
  const getAyahInfo = (e) => {
    // Clear highlight class before add it to the current ayah
    const elements = e.target.parentNode.children;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("highlight");
    }
    e.target.previousSibling.classList.add("highlight");
    props.ayahNumber(e.target.dataset.verseQuran);
  };
  console.log(props);
  const getSurahData =
    props.surah.length > 0 &&
    props.surah.map((verse) => (
      <Fragment key={verse.numberInSurah}>
        <span
          data-verse-surah={verse.numberInSurah}
          data-verse-quran={verse.number}
        >
          {verse.text}
        </span>
        <span
          className="ayah"
          data-ayah={verse.numberInSurah}
          data-verse-quran={verse.number}
          onClick={getAyahInfo}
        ></span>
      </Fragment>
    ));
  return (
    <div className="surah">
      <img src={basmallah} alt="basmallah" />
      {getSurahData}
    </div>
  );
};

export default Surah;

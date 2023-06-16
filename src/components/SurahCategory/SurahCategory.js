import React from "react";
import SurahList from "./SurahList";
import Ayah from "./ayahNumber";
import SurahName from "./surahName";
import "./SurahCategory.css";
const SurahCategory = (props) => {
  const surahNumber = (num) => {
    console.log(num);
    props.onchangeSurahFromList(num);
  };
  return (
    <div className="SurahCategory">
      <SurahList onchangeSurah={surahNumber} />
      <SurahName onchangeSurahName={props.surahName} />
      <Ayah />
    </div>
  );
};

export default SurahCategory;

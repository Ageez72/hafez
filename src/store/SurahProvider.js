// import React from "react";
import SurahContext from "./surah-context";

const SurahProvider = (props) => {
  const changeSurahHandler = (surah) => {
    console.log(surah);
  };
  const surahContextvalue = {
    surah: 1,
    surahNumber: 1,
    surahInQuran: 1,
    ayahInSurah: 1,
    ayahInQuran: 1,
    changeSurah: changeSurahHandler,
  };
  return (
    <SurahContext.Provider value={surahContextvalue}>
      {props.children}
    </SurahContext.Provider>
  );
};

export default SurahProvider;

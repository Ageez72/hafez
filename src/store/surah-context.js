import React from "react";

const SurahContext = React.createContext({
  surah: 1,
  surahNumber: 1,
  surahInQuran: 1,
  ayahInSurah: 1,
  ayahInQuran: 1,
  changeSurah: (surah) => {},
});

export default SurahContext;

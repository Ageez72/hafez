import React, { useEffect, useState } from "react";
import axios from "axios";
import Player from "../PlayerControl/PlayerControl";
import Surah from "../Surah/Surah";
import Card from "../../Card/Card";
import SurahCategory from "../..//SurahCategory/SurahCategory";

const Controller = () => {
  const [surah, setSurah] = useState([]);
  const [surahName, setSurahName] = useState({});
  const [surahNumber, setSurahNumber] = useState(1);
  const [ayahInQuran, setAyahInQuran] = useState(1);
  const url = `https://api.alquran.cloud/v1/surah/${surahNumber}`;
  useEffect(() => {
    getSurah();
  }, [surahNumber]);
  const getSurah = () => {
    axios
      .get(url)
      .then((res) => {
        const allVerses = res.data.data.ayahs;
        const name = res.data.data.name;
        console.log(name);
        setSurahName(name);
        setSurah(allVerses);
      })
      .catch((err) => console.log(err));
  };
  const getAyahInQuran = (number) => {
    setAyahInQuran(number);
  };
  const getSurahFromList = (number) => {
    console.log(number, surahNumber);
    setSurahNumber(number);
  };
  return (
    <Card className="surah-container">
      <SurahCategory
        onchangeSurahFromList={getSurahFromList}
        surahName={surahName}
      />
      <Surah surah={surah} ayahNumber={getAyahInQuran} />
      <hr />
      <Player ayahInQuran={ayahInQuran} />
    </Card>
  );
};

export default Controller;

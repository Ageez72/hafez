import React, { useState, useEffect } from "react";
import axios from "axios";
const SurahList = (props) => {
  const url = "https://api.alquran.cloud/v1/surah";
  const [surahList, setSurahList] = useState([]);
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
  const getNumberOfSurah = (e) => {
    console.log(e.target.value);

    props.onchangeSurah(e.target.value);
  };
  return (
    <>
      <select className="ar" onChange={getNumberOfSurah}>
        {surahList.map((surah) => (
          <option key={surah.number} value={surah.number}>
            {surah.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SurahList;

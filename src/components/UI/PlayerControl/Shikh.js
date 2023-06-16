import React from "react";

const Shikh = (props) => {
  const getShikhName = (e) => {
    props.getShikhName(e.target.value);
  };
  return (
    <>
      <select onChange={getShikhName}>
        <option value="ar.alafasy">Mishari Rashid</option>
        <option value="ar.minshawi">Al Minshawi</option>
        <option value="ar.husarymujawwad">Husary</option>
        <option value="ar.hudhaify">Hudhaify</option>
        <option value="ar.shaatree">Al Shaatree</option>
        <option value="ar.muhammadayyoub">Muhammad Ayyoub</option>
        <option value="ar.muhammadjibreel">Muhammad Jibreel</option>
      </select>
    </>
  );
};

export default Shikh;

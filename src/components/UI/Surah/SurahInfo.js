import React, { useEffect } from "react";
import "./SurahInfo.scss";
function SurahInfo(props) {
  useEffect(() => {}, [props.name]);
  const closeModal = () => {
    document.body.classList.remove("overflow-hidden");
    document.getElementById("modal").classList.remove("open");
    document.querySelector(".highlight").classList.remove("highlight");
  };
  return (
    <div className="modal-surah-info">
      <div className="close-modal" onClick={closeModal}>
        <i className="icon-chevron-down-solid"></i>
      </div>
      <div className="surah-name">
        <h3>
          <span>{props.name.length > 0 && props.name}</span>
          <span>{props.number}.</span>
        </h3>
      </div>
      <div className="bookmark">
        <i className="icon-bookmark-regular"></i>
      </div>
    </div>
  );
}

export default SurahInfo;

import React from "react";

import VideoImg from "../Assets/images/3.jpg";
import Style from "../Styles/video.module.css";

export default function Video() {
  return (
    <div className={Style.video}>
      <img src={VideoImg} alt="Video Title" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      <div className={Style.qmeta}>
        <p>10 Questions</p>
        <p>Score : Not taken yet</p>
      </div>
    </div>
  );
}

import React from "react";
import ChackBox from "./ChackBox";
import Style from "../Styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={Style.answers}>
      <ChackBox className={Style.answer} text=" A New Hope 1" />
      <ChackBox className={Style.answer} text=" A New Hope 1" />
      <ChackBox
        className={`${Style.answer} ${Style.wrong}`}
        text=" A New Hope 1"
      />
      <ChackBox
        className={`${Style.answer} ${Style.correct}`}
        text=" A New Hope 1"
      />
      <ChackBox className={Style.answer} text=" A New Hope 1" />
    </div>
  );
}

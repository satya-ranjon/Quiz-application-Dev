import React from "react";
import Style from "../Styles/questions.module.css";
import Answers from "./Answers";
export default function Quistions() {
  return (
    <div className={Style.question}>
      <div className={Style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}

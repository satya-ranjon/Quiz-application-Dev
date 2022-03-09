import React from "react";
import Style from "../Styles/analysis.module.css";
import Quistions from "./Quistions";

export default function Analysis() {
  return (
    <div className={Style.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Quistions />
      <Quistions />
    </div>
  );
}

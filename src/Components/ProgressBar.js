import React from "react";
import { Link } from "react-router-dom";
import Style from "../Styles/progressbar.module.css";
import Button from "./Button";

export default function ProgressBar() {
  return (
    <div className={Style.progressBar}>
      <div className={Style.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Style.rangeArea}>
        <div className={Style.tooltip}>24% Cimplete!</div>
        <div className={Style.rangeBody}>
          <div className={Style.progress} style={{ width: "40%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={Style.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}

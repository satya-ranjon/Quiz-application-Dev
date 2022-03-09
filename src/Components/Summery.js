import React from "react";
import Style from "../Styles/summery.module.css";
import Img from "../Assets/images/success.png";

export default function Summery() {
  return (
    <div className={Style.summary}>
      <div className={Style.point}>
        <p className={Style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={Style.badge}>
        <img src={Img} alt="Success" />
      </div>
    </div>
  );
}

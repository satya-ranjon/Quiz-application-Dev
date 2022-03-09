import React, { useState } from "react";
import Style from "../Styles/miniplayer.module.css";
import Img from "../Assets/images/3.jpg";

export default function Miniplayer() {
  const [open, setOpen] = useState(true);

  const video = (
    <>
      <img src={Img} alt="img" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </>
  );

  return (
    <div
      className={
        open === true
          ? `${Style.miniPlayer} ${Style.floatingBtn}`
          : `${Style.miniPlayer}`
      }
    >
      <span
        className={`material-icons-outlined ${Style.open}`}
        onClick={() => setOpen(() => (open === true ? false : true))}
      >
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${Style.close}`}
        onClick={() => setOpen(() => (open === true ? false : true))}
      >
        close
      </span>
      {open === true ? null : video}
    </div>
  );
}

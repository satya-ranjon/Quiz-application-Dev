import React from "react";
import Style from "../Styles/button.module.css";

export default function Button({ className, children }) {
  return <button className={`${Style.button} ${className}`}>{children}</button>;
}

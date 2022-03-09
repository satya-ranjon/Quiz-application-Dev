import React from "react";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <Miniplayer />
    </>
  );
}

import React from "react";

export default function Progress({
  indexOfQues,
  numQuestions,
  points,
  totalPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={indexOfQues + Number(answer !== null)}
      />
      <p>
        Question <strong>{indexOfQues + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

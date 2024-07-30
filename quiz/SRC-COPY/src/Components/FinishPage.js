import React from "react";

export default function FinishPage({ points, totalPoints, dispatch }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored a total of <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className=" btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

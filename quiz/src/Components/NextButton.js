import React from "react";

export default function NextQuestion({
  dispatch,
  answer,
  indexOfQues,
  numQuestions,
}) {
  if (answer === null) return null;

  if (indexOfQues < numQuestions - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );

  if (indexOfQues === numQuestions - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );
}

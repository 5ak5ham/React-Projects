import React from "react";

export default function StartingPage({ numQuestions, dispatch }) {
  function startQuiz() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startQuiz}>
        {" "}
        Let's Start
      </button>
    </div>
  );
}

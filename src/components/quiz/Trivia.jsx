import "./trivia.css";

import { useEffect, useState } from "react";

export default function Trivia({
  questions,
  questionNumber,
  setQuestionNumber,
  setStop,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("null");

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  console.log(question);
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.isCorrect ? "answer correct" : "answer wrong")
    );

    delay(6000, () => {
      if (a.isCorrect) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setSelectAnswer(null);
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.description}</div>
      <div className="answers">
        {question?.options.map((a) => (
          <div
            className={selectAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

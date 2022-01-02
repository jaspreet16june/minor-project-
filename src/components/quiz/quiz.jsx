import React, { useState, useEffect } from "react";
import "./quiz.css";
import Trivia from "../quiz/Trivia";
import axios from "axios";
import Timer from "../quiz/Timer"

const Quiz = () => {
     const getAllQuestions = () => {
       axios.get("/api/quiz").then((res) => {
         console.log(res);
         setQuestions(res.data.data);
       });
     };

//States
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 Points");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions();
  }, []);

  
    const moneyPyramid = [
      { id: 1, amount: "10 Points" },
      { id: 2, amount: "20 Points" },
      { id: 3, amount: "30 points" },
      { id: 4, amount: "40 points" },
      { id: 5, amount: "50 points" },
      { id: 6, amount: "60 points" },
      { id: 7, amount: "70 points" },
      { id: 8, amount: "80 points" },
      { id: 9, amount: "90 points" },
      { id: 10, amount: "100 points" },
    ].reverse();
    
    useEffect(() => {
      questionNumber > 1 &&
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [moneyPyramid, questionNumber]);


  return (
    <div className = "App">
      <div className="main">
        {stop ? (
          <h1 className="endText"> You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                questions={questions}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;

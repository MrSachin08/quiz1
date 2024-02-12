import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import "./app.css"


function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earn, setEarn] = useState(" Rs 0");

  const data = [
    {
      id: 1,
      question: "what is the capital of India",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "paris",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "colombo",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the smallest unit of matter?",
      answers: [
        {
          text: "atom",
          correct: true,
        },
        {
          text: "cell",
          correct: false,
        },
        {
          text: "gas",
          correct: false,
        },
        {
          text: "sand",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: " NEFT means",
      answers: [
        {
          text: "Negotiated Efficient Fund Transfer System",
          correct: true,
        },
        {
          text: "National Efficient Fund Transfer Solution",
          correct: false,
        },
        {
          text: "National Electronic Funds Transfer System",
          correct: true,
        },
        {
          text: "Non Effective Fund Transfer System",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " India started its five year planning with effect from the year",
      answers: [
        {
          text: "1955",
          correct: false,
        },
        {
          text: "1960",
          correct: false,
        },
        {
          text: "1963",
          correct: false,
        },
        {
          text: "1951",
          correct: true,
        },
      ],
    }
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 11, amount: "Rs 10000" },
      { id: 10, amount: "Rs 5000" },
      { id: 9, amount: "Rs 2500" },
      { id: 8, amount: "Rs 1250" },
      { id: 7, amount: "Rs 1000" },
      { id: 6, amount: "Rs 800" },
      { id: 5, amount: "Rs 600" },
      { id: 4, amount: "Rs 400" },
      { id: 3, amount: "Rs 200" },
      { id: 2, amount: "Rs 100" },
      { id: 1, amount: "Rs 50" },
    ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarn(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {!userName ? (
        <Start setUsername={setUserName} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earn}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyra">
            <ul className="moneyitem">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id ? "moneylist active" : "moneylist"
                  }
                >
                  <span className="moneylistnumber">{m.id}</span>
                  <span className="moneylistamount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

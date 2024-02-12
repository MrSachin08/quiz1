import React, {  useEffect, useState } from 'react'

const Trivia = ({data,setTimeOut,questionNumber,setQuestionNumber}) => {
  
  const [question,setQuestion]=useState(null);
  const[selectedAnswer,setselectedAnswer]=useState(null);
  const [className,setclassName]=useState("answer");
 



  useEffect(()=>{
    setQuestion(data[questionNumber-1]);
  },[data,questionNumber])
  ;
  const delay=(duration,callback)=>{
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick=(a)=>{
    setselectedAnswer(a);
    setclassName("answer active");
    delay(3000,()=>{
      setclassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(6000,()=>{
      if(a.correct){
       
        setQuestionNumber((prev)=>prev+1);
        setselectedAnswer(null);
      }
      else{
       
        delay(1000, () => {
          setTimeOut(true);
        });

      }
    })
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default Trivia;
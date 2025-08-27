import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export const GeneratedQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { subject, chapter, quiz } = location.state || {};
  const[score,setScore]=useState(0);
  const[currentQuestionIndex,setCurrentQuestionIndex]=useState(0);
  const [answers, setAnswers] = useState({});
  const[startTime]=useState(Date.now());

  console.log("Quiz received:", quiz);

  if (!quiz) {
    return (
      <div>
        <h2>No quiz data found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

 const handleAnswer=(option)=>{
  
   // Save user answer
    const newAnswers = { ...answers, [currentQuestionIndex]: option };
    setAnswers(newAnswers);

   // Update score if correct
    if (option === quiz[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
   //if no last question,go to next
    if(currentQuestionIndex< quiz.length-1){
  setCurrentQuestionIndex(currentQuestionIndex+1)
 } else {
    // 🚀 Quiz finished, go to result page
     const endTime = Date.now();
      const timeTaken = Math.floor((endTime - startTime) / 1000); // seconds
    navigate("/quiz-result", {
      state: { score, total: quiz.length, answers:newAnswers,quiz,timeTaken, },
    });
  }

 }
 const handlePriview=()=>{
  if(currentQuestionIndex<quiz.length-1){
    setCurrentQuestionIndex(currentQuestionIndex-1);
  }
 }
 const handleNext=()=>{
   if(currentQuestionIndex<quiz.length-1){
    setCurrentQuestionIndex(currentQuestionIndex+1);
  }
 }

  return (

    <div className="Container section-Generatedquiz">
    <div className="timer-back">
      <button onClick={() => navigate(-1)} className="text-gray-100 flex justify-center items-center rounded-sm dark:bg-gray-700 w-30"><FaArrowCircleLeft/>Back</button>
      <button class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 w-50">Timer running</button>
        
    </div>
       
     

      <div className="quenstion-options">
        <div className="question section-sub--heading">
      {quiz[currentQuestionIndex].question}
      </div>
      
      <div className="options">
        {quiz[currentQuestionIndex].options.map((option,index)=>(
          <button key={index} onClick={()=>{handleAnswer(option)}} className="btn w-150 h-20">{option} </button>
        ))}
        </div>
      </div>
      <div className="timer-back">
        <button className="text-gray-100 flex justify-center items-center rounded-sm dark:bg-gray-700 w-40 h-15 >Previous" onClick={handlePriview}><FaArrowCircleLeft/> Previous</button>
        <button className="text-gray-100 flex justify-center items-center rounded-sm dark:bg-gray-700 w-40 h-15>Next" onClick={handleNext}>Next <FaArrowCircleRight /></button>
      </div>
      
    </div>
  );
};

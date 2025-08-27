import "tailwindcss";
import { TopicCard } from "../components/TopicCard";
import { useState } from "react";
import {  SelectSubjectQuiz } from "../components/SelectSubjectQuiz";

export const SelectTopic=({topic,onClose})=>{
console.log("my topic is:",topic);
 const [selectSubject,setSelectSubject]=useState("");

  const handleQuizSelect=(id,quiztopic)=>{
       console.log("the quizz selected is id:",id,"selectedQuiz:",quiztopic);
      setSelectSubject({id,quiztopic});
      // console.log(setSelectSubject.id,setSelectSubject.quiztopic);
  }
  
  //  const onClosePopup=()=>{
  //   setSelectSubject(null);
  //  }

    if(!topic) return null;
    return(
    <>
    <div className="container">
          <div className="popup-overlay">
            <div className="popup-content">
               <div className="generate-quiz">
              <h2 className=" font-bold  text-5xl text-blue-600 ">Play Quiz</h2>
              <h3 className="text-3xl text-black ">Choose Quiz</h3>
               <div className="Select-Topic">
                <TopicCard  onQuizSelect={handleQuizSelect}/>
               </div>
               
               <div className="">
            
               </div>
              
                 {selectSubject?.id == 1 && (
                  <>
                     <SelectSubjectQuiz Quizselect={selectSubject} topicselect={topic} />
                      
                       </>
        )}
              {selectSubject?.id==2 &&(
                <>
                {/* <h1>hello iam  From Selected Quiz</h1> */}
                 <SelectSubjectQuiz Quizselect={selectSubject} topicselect={topic} />
                </>
              )}
              {/* <p>
                <strong>ID:</strong> {topic.id}
              </p>
              <p>
                <strong>Name:</strong> {topic.name}
              </p> */}
              <button className="" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
          </div>
    </>
    );
  }
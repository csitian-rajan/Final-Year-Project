import { useState } from "react";
import"./enroll.css";

export const SelectSubjectQuiz = ({Quizselect }) => {
  // subject list
  const subjects = ["Math", "Physics", "Chemistry", "English"];
  const tag="IOE";

  // syllabus data
  const syllabus = {
    Math: ["Algebra", "Geometry", "Calculus"],
    Physics: ["Mechanics", "Optics", "Electromagnetism"],
    Chemistry: ["Organic", "Inorganic", "Physical"],
    English: ["Grammar", "Comprehension", "Literature"],
  };

  const [selectedSubject, setSelectedSubject] = useState(null);
 
   const handlebtn=()=>{
    
   }

if(!Quizselect.id== 1) return null; // Safe check

    // if (!Quizselect || Quizselect.id !==1) return null; // Only show when id=1

  return (
    <>
    <h1>Select Subject</h1>
    <div className="select-subject">
       {
        subjects.map((subj)=> {
            return <>
            <button key={subj}  name={subj} className=" subject-button flex  w-150 h-20 " onClick={handlebtn}>{subj}<span>{tag}</span></button>
            </>
        })
       }
    </div>
    </>
  );
};


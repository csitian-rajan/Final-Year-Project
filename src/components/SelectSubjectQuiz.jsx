import { useState } from "react";
import"./enroll.css";
import { SelectChapter } from "./SelectChapter";

export const SelectSubjectQuiz = ({Quizselect }) => {
  // subject list
  const subjects = ["Math", "Physics", "Chemistry", "English"];
  const tag="IOE";


  const [selectedSubject, setSelectedSubject] = useState("");
 
   const handlebtn=(subj,i)=>{
    console.log("subject:",subj);
   
    setSelectedSubject(subj);
    console.log(selectedSubject);
  
   }
   const closePopup = () => {
    setSelectedSubject(null);
  };

if (!Quizselect || !Quizselect.id == 1) return null;

   return (
     <>
 
    <div className="select-subject">
       {
        subjects.map((subj,i)=> {
            return <>
            <button key={subj}  className=" subject-button flex  w-150 h-20 " onClick={()=>handlebtn(subj)}>{subj}<span>{tag}</span></button>
            </>
        })
       }
    </div>
            {/* ✅ show SelectChapter only if a subject is clicked */}

            <div className="slelect-chapter">

               {selectedSubject && 
            <SelectChapter subject={selectedSubject} onClose={closePopup} />
      }
    
      </div>
       
     </>
  );
};


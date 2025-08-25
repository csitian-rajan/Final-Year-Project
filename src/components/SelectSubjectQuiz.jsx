import { useState } from "react";
import "./enroll.css";
import { SelectChapter } from "./SelectChapter";

export const SelectSubjectQuiz = ({ Quizselect }) => {
   console.log("the id is subject",Quizselect);
  if (!Quizselect) return null;

//   Map Quizselect.id to exam type
  const examTypeMap = {
    1: "IOE",
    2: "LokSewa",
    3: "GK",
  };
 

  const examType = examTypeMap[Quizselect.id];
  const subjectsMap = {
    IOE: ["Math", "Physics", "Chemistry", "English"],
    LokSewa: ["General Paper", "Aptitude", "Current Affairs", "English"],
    GK: ["History", "Geography", "Science", "Politics"],
  };

  const subjects = subjectsMap[examType] || [];

  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");

  const handlebtn = (subj) => {
    // Pass examType directly instead of relying on closure
    setSelectedSubject(subj);
    setSelectedExamType(examType);
    console.log("Clicked subject:", subj, "Exam type:", examType);
  };

  const closePopup = () => {
    setSelectedSubject("");
    setSelectedExamType("");
  };

  return (
    <>
      <div className="select-subject">
        <h1 className="text-black">Select a Subject</h1>
         {subjects.map((subj) => (
          <button
            key={subj}
            className="subject-button flex w-150 h-20"
            onClick={() => handlebtn(subj)}
          >
            {subj} <span>{examType}</span>
          </button>
        ))} 
      
      </div>

      {/* Show SelectChapter popup only when a subject is clicked */}
      {selectedSubject && selectedExamType && (
        <SelectChapter
          subject={selectedSubject}
          examType={selectedExamType}
          onClose={closePopup}
        />
      )}
    </>
  );
};

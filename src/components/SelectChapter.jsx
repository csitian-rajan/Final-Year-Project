import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SelectChapter = ({ subject, examType,topicSelect,onClose }) => {
 console.log("Subject:", subject, "Exam Type:", examType ,"topic Select id:",topicSelect);
  const navigate = useNavigate();

   // ✅ Divided syllabus into groups
   const syllabus = {
    IOE: {
      Math: ["Algebra", "Geometry", "Calculus", "Trigonometry", "Probability"],
      Physics: ["Mechanics", "Optics", "Electromagnetism", "Thermodynamics"],
      Chemistry: ["Organic", "Inorganic", "Physical", "Biochemistry"],
      English: ["Grammar", "Comprehension", "Literature", "Vocabulary"],
    },

    LokSewa: {
      ComputerOperator: ["Computer Fundamentals", "Operating System","MS Word","MS Excel", "MS PowerPoint", "MS Access / SQL Basics", "Computer Networks", "Internet & Email", "Programming Fundamentals","IT Policy & Cyber Security","Office Management & Typing", ],
    },

    GeneralKnowledge: {
      GeneralKnowledge: [
        "Nepal History",
        "World History",
        "Geography of Nepal",
        "World Geography",
        "Basic Science",
        "Current Affairs",
        "Nepal Politics",
      ],
    },
  };

  const [selectedChapter, setSelectedChapter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   console.log("selectedChapter",selectedChapter);
  
    let chapterList = [];
  if (syllabus[examType]?.[subject]) {
    chapterList = syllabus[examType][subject];
  }
  const handleGenerate = async () => {
    if (!selectedChapter) {
      alert("Please select a chapter first");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, chapter:selectedChapter }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError("❌ Failed to generate quiz. Please try again.");
        setLoading(false);
        return;
      }

      console.log("Quiz generated backend:", data);
   
      
      // After fetching data from backend
       
      if(!data.success || !Array.isArray(data.quiz) || data.quiz.length === 0){
        alert("Failed to generate quiz. Raw output:\n" + (data.raw || "Unknown error"));
    
    return;
      }

      console.log("Quiz data before navigation:", data.quiz);

      // navigation to generate code
        navigate("/generated-quiz", {
        state: { subject, chapter:selectedChapter, quiz: data.quiz },
});
      // Navigate to quiz page with data
      // navigate("/quiz", { state: { subject, chapter: selectedChapter, quiz: data.quiz } });
    } catch (err) {
      console.error("Fetch error:", err);
      setError("❌ Failed to fetch quiz from backend.");
    } finally {
      setLoading(false);
    }
  };

  // handle play Quiz
  const handlePlay = async () => {
    if (!selectedChapter) {
      alert("Please select a chapter first");
      return;
    }

    setLoading(true);
    setError("");
     navigate("/selected-quiz", {
        state: { subject, chapter:selectedChapter },})
  }

  
   // ✅ Find correct chapter list


  return (
    <div className="container">
      <div className="popup-overlay-subject">
        <div className="popup-content-subject">
          <div className="generate-quiz">
            <h2 className="font-bold text-3xl text-black">Select Chapter</h2>
            <h3>{subject}</h3>

            <ul>
              {chapterList?.map((chapter) => (
                <li key={chapter} className="cursor-pointer text-green-600">
                  <input
                    type="radio"
                    name="chapter"
                    value={chapter}
                    onChange={() => setSelectedChapter(chapter)}
                    checked={selectedChapter === chapter}
                  />
                  {chapter}
                </li>
              ))}
            </ul>

            {error && <p className="text-red-600">{error}</p>}
             {/* ✅ Conditional Button based on subject.id */}
               {topicSelect==1?(
              <button disabled={loading} onClick={handleGenerate}>
                {loading ? "Generating..." : "Generate Quiz"}
              </button>
                 ) :topicSelect==2?(
          
             <button disabled={loading} onClick={handlePlay}>
              {loading ? "starting..." : "Start Quiz"}
            </button>
              ):null} 
            <button onClick={onClose}>Close</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

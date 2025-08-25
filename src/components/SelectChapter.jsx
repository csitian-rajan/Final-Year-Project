import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SelectChapter = ({ subject, onClose }) => {
  const navigate = useNavigate();

  const syllabus = {
    Math: ["Algebra", "Geometry", "Calculus"],
    Physics: ["Mechanics", "Optics", "Electromagnetism"],
    Chemistry: ["Organic", "Inorganic", "Physical"],
    English: ["Grammar", "Comprehension", "Literature"],
  };

  const [selectedChapter, setSelectedChapter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        body: JSON.stringify({ subject, chapter: selectedChapter }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError("❌ Failed to generate quiz. Please try again.");
        setLoading(false);
        return;
      }

      console.log("Quiz generated:", data);

      // Navigate to quiz page with data
      navigate("/quiz", { state: { subject, chapter: selectedChapter, quiz: data.quiz } });
    } catch (err) {
      console.error("Fetch error:", err);
      setError("❌ Failed to fetch quiz from backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="popup-overlay-subject">
        <div className="popup-content-subject">
          <div className="generate-quiz">
            <h2 className="font-bold text-3xl text-black">Select Chapter</h2>
            <h3>{subject}</h3>

            <ul>
              {syllabus[subject]?.map((chapter) => (
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

            <button disabled={loading} onClick={handleGenerate}>
              {loading ? "Generating..." : "Generate Quiz"}
            </button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

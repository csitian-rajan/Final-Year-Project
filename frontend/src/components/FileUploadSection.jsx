import React, { useState } from "react";
import { FileText, UploadCloud } from "lucide-react";
import axios from "axios";

export default function FileUploadSection() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMCQs, setShowMCQs] = useState(false);

  const handleButtonClick = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }
    setError("");
    setLoading(true);
    setMcqs([]);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("num_questions", 5);

    try {
      const response = await axios.post("http://127.0.0.1:5000/generate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.mcqs) {
        setMcqs(response.data.mcqs);
        setShowMCQs(true); // Show MCQs UI
      } else if (response.data.error) {
        setError(response.data.error);
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate questions. Make sure Flask backend is running.");
    }

    setLoading(false);
  };

  // Reset to upload UI
  const handleReset = () => {
    setShowMCQs(false);
    setFile(null);
    setMcqs([]);
    setError("");
  };

  return (
    <div className="fileupload-section">
      <div className="w-300 h-150 mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col justify-center items-center">
        {/* File Icon at Top */}
        <div className="flex items-center justify-center mb-6 cursor-pointer" onClick={handleReset}>
          <FileText className="file-based w-15 h-15 text-blue-600" />
          <h3 className="text-2xl text-black ml-2">{showMCQs ? "Get Back Generate Questions" : "File Based Quiz"}</h3>
        </div>

        {/* Upload UI */}
        {!showMCQs && (
          <>
            <div
              className="fileupload-box w-250 h-90 flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center mb-6 cursor-pointer transition-colors border-gray-400"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".txt,.pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <UploadCloud className="w-15 h-15 text-gray-400 ml-20 mb-4" />

              {file ? (
                <>
                  <p className="text-lg font-medium mb-2">File Selected</p>
                  <p className="mb-2 truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">Click to select a different file</p>
                </>
              ) : (
                <>
                  <h3 className="text-4xl font-medium mb-2">Drag And Drop Your File Here</h3>
                  <p className="text-lg font-medium">Click to browse your file</p>
                  <p className="text-sm text-gray-500">Supports PDF, DOCX, TXT</p>
                </>
              )}
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              onClick={handleButtonClick}
              className="w-250 h-15 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
            >
              {loading ? "Generating..." : "Upload File"}
            </button>
          </>
        )}

        {/* MCQs UI */}
        {showMCQs && mcqs.length > 0 && (
          <div className="mt-4 w-full max-w-2xl h-80 overflow-y-auto text bg-gray-50 p-4 rounded shadow-inner">
            {mcqs.map((mcq, idx) => (
              <div key={idx} className="bg-white p-4 rounded shadow mb-4">
                <p className="font-semibold text-lg">
                  {idx + 1}. {mcq.question}
                </p>
                <ul className="list-decimal pl-6 mt-2">
                  {mcq.options.map((opt, i) => (
                    <li key={i} className="mb-1">
                      {opt}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-green-600 font-semibold">Answer: {mcq.correct}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

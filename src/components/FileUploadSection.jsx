import React, { useState } from "react";
import { FileText, UploadCloud } from "lucide-react";

export default function FileUploadSection() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    if (!file) {
      setError("Please select a file first");
    } else {
      setError("");
     alert(`File "${file.name}" is selected!`); // you can replace this with your logic
    }
  };

  return (
    <div className="fileupload-section">
    <div className=" w-300 h-150 mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col  justify-center items-center  ">
      <div className="flex items-center justify-center mb-6">
        <FileText className="file-based w-15 h-15 text-blue-600 " />
        <h3 className="text-2xl  text-black">File Based Quiz</h3>
      </div>

      {/* File Upload Box */}
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
            <p className="text-lg font-medium  mb-2">File Selected</p>
            <p className=" mb-2   truncate">{file.name}</p>
            <p className="text-sm text-gray-500">Click to select a different file</p>
          </>
        ) : (
          <>
          <h3 className="text-4xl font-medium mb-2">Drag And Drop Your File Here</h3>
            <p className="text-lg font-medium ">Click to browse your file</p>
            <p className="text-sm text-gray-500">Supports PDF, DOCX, TXT</p>
          </>
        )}
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Button */}
      <button
        onClick={handleButtonClick}
        className="w-250  h-15 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
      >
        Upload File
      </button>
    </div>
 </div>
  );
}
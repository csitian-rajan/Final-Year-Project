import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaEye } from "react-icons/fa";

export const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, total = 0, timeTaken = 0, answers = {}, quiz = [] } =
    location.state || {};

  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  const wrong = total - score;
  const [showReview, setShowReview] = useState(false);

  if (!quiz) {
    return (
      <div>
        <h2>No result data found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="Quiz-completed-score">
        <div className="text-center">
          <div className="shild w-25 h-25 mx-auto mb-2 flex items-center justify-center rounded-full bg-blue-100">
            <span className="text-5xl">🏆</span>
          </div>
          <h1 className="text-4xl font-semibold text-black">Quiz Completed!</h1>
          <p className="text-sm">
            Here&apos;s how you performed on the Loksewa Practice
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-2xl p-6 w-full max-w-xl text-center mb-6">
          <h2 className="text-4xl font-bold text-blue-600">{accuracy}</h2>
          <p
            className={`font-medium mt-1 ${
              accuracy >= 70 ? "text-green-600" : "text-red-500"
            }`}
          >
            {accuracy >= 70 ? "Great Job! 👏" : "Keep Practicing!"}
          </p>

          {/* Progress bar */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full mt-4">
            <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
          </div>

          {/* Correct / Wrong */}
          <div className="correct-wrong flex justify-around mt-6">
            <div className="text-green-600 font-medium text-3xl">
              ✅ {score}{" "}
              <span className="block text-gray-500 text-3xl">Correct</span>
            </div>
            <div className="text-red-500 font-medium text-3xl">
              ❌ {wrong}{" "}
              <span className="block text-gray-500 text-3xl">Wrong</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stat grid grid-cols-3 gap-6 w-full">
          <div className="bg-white shadow rounded-xl p-4 text-center result">
            <p className="text-black text-sm">Accuracy</p>
            <p className="text-lg font-semibold text-blue-600">{accuracy}</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4 text-center result">
            <p className="text-gray-500 text-sm">Time Taken</p>
            <p className="text-lg font-semibold">
              {Math.floor(timeTaken / 60)}m {timeTaken % 60}s
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-4 text-center result">
            <p className="text-gray-500 text-sm">Questions</p>
            <p className="text-lg font-semibold">
              {score}/{total}
            </p>
          </div>
        </div>

        {/* Question Review */}
        <div className="question-review bg-white shadow rounded-xl p-6 w-full h-50 flex justify-center flex-col items-center mb-6">
          <h3 className="review text-gray-700 text-4xl mb-4">Question Review</h3>
          <div className=" review flex gap-4">
            <button
              onClick={() => setShowReview(true)}
              className="flex items-center gap-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl shadow"
            >
              <FaEye className="w-5 h-5" /> Review
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal for Review */}
      {showReview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl relative">
            <h3 className="text-gray-700 text-2xl h-15 mb-4">Question Review</h3>

            <div className=" display-review overflow-y-auto max-h-[70vh] p-2 ">
              {quiz.map((q, i) => {
                const isCorrect = answers[i] === q.answer;
                const right=isCorrect? "✅":"❌";
                 const answerRight=!isCorrect? "✅":"❌";
                return (
                  <div
                    key={i}
                    className={`p-1 mb-1 rounded-lg review-content`}
                  >
                    <p className="">
                      {i + 1}. {q.question}
                    </p>
                    <p>
                      Your Answer:{" "}
                      <span
                        className={""}
                      >
                        {answers[i] || "Not Answered"}{right}
                      </span>
                    </p>
                    {!isCorrect && (
                       
                      <p className="text-blue-600 review-content-incorrect">
                        Correct Answer: {q.answer}{answerRight}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowReview(false)}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 w-10"
            >
              ✖
            </button>

            {/* Buttons inside modal */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-xl shadow"
              >
                <FaHome className="w-5 h-5" /> Home
              </button>
              <button
                onClick={() => navigate("/analytics")}
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow"
              >
                📊 View Analytics
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

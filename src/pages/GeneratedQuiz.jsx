import { useLocation, useNavigate } from "react-router-dom";

export const GeneratedQuiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { subject, chapter, quiz } = location.state || {};

  if (!quiz) {
    return (
      <div>
        <h2>No quiz data found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz for {subject} - {chapter}</h1>
      <pre>{JSON.stringify(quiz, null, 2)}</pre>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

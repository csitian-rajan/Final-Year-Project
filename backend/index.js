import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";

dotenv.config(); // loads GEMINI_API_KEY

const app = express();

app.use(cors({
  origin: "http://localhost:5173",  // match your React port
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { subject, chapter } = req.body;
    console.log(chapter ,subject);

    if (!subject || !chapter) {
      return res.status(400).json({ success: false, error: "Missing subject or chapter" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a quiz master. Generate 10 random multiple-choice questions for ${subject}, specifically from ${chapter}.
Each question must have 4 options and 1 correct answer.
IMPORTANT: Output ONLY valid JSON. Do NOT include \`\`\`json, markdown, or any explanation.
Example format:
[
  {
    "id": 1,
    "question": "What is 2+2?",
    "options": ["1", "2", "3", "4"],
    "answer": "4"
  }
]`;

    const result = await model.generateContent(prompt);
    let quizText = result.response.text().trim();

    // Remove Markdown or code blocks if any
    quizText = quizText.replace(/```json|```/g, "").trim();

    let quiz;
    try {
      quiz = JSON.parse(quizText);
      if (!Array.isArray(quiz)) throw new Error("Quiz is not an array");
    } catch (err) {
      console.log("Failed to parse Gemini output:", err.message);
      return res.json({ success: false, raw: quizText, error: "Invalid JSON from Gemini" });
    }

    // ✅ Return clean JSON to frontend
    res.json({ success: true, quiz });

  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ success: false, error: "Failed to generate quiz" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

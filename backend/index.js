import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";
dotenv.config(); // ✅ loads GEMINI_API_KEY from .env



const app = express();
app.use(cors({
  origin: "http://localhost:5173",  // change if your React runs on different port
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/generate-quiz", async (req, res) => {
  try {
    const { subject, chapter } = req.body;
    
    console.log("Loaded GEMINI_API_KEY:", process.env.GEMINI_API_KEY);


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a quiz master. Generate 10 random multiple-choice questions for ${subject}, specifically from ${chapter}.
    Each question must have 4 options and 1 correct answer.
⚠️ IMPORTANT: The output must be ONLY valid JSON array, no Markdown, no explanations, no text outside JSON.
Example format:
[
  {
    "id": 1,
    "question": "What is 2+2?",
    "options": ["A.1", "B.2", "C.3", "D.4"],
    "answer": "4"
  }
]`;

    const result = await model.generateContent(prompt);
    let quizText = result.response.text().trim();
    //try passing quizz into json
    let quiz
    try {
      quiz= JSON.parse(quizText)
    }catch(err){
      console.log("failled to gemei output:",err);

      //fallback :return raw text if parsing fails
      return res.json({success:false,raw:quizText});
    }
     res.json({success:true,quiz})
        json =JSON.parse(result);
    
  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

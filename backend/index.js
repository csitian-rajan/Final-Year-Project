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

    const prompt = `you are a quiz master.generate 10 random question for ${subject}, specifically from ${chapter} with 4 multiple choise answer.also provid the answer separetely. the resresposnse shoild be in the following json format:[{'id:'0,'question':','options':[],'answer':'},..]}`;

    const result = await model.generateContent(prompt);

    res.json({ success: true, quiz: result.response.text() });
  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

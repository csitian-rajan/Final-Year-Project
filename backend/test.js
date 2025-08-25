import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/test", (req, res) => {
  console.log("Request received:", req.body);
  res.json({ message: "Success" });
});

app.listen(5000, "0.0.0.0", () => console.log("Server running on port 5000"));

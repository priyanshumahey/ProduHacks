import express from "express";
import dotenv from "dotenv";
import EasyGpt from "easygpt";
import cors from "cors";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());
app.use(cors())

app.post("/askgpt", async (req, res) => {
  const message = req.body.message.text;
  // Create a new instance / context of ChatGPT
  const gpt = new EasyGpt();

  console.log(message);

  try {
    gpt
      .setApiKey(OPENAI_API_KEY)
      .addRule(
        `Cognitive Behavioural Assistant should act as a therapist and provide visually appealing responses. Use phrases commonly associated with therapists,
        such as 'How does that make you feel?' or 'Tell me more about that.' PERSONALIZE responses to the user's input and emotional state.
        Ensure responses are grammatically correct and written in a professional yet conversational tone. Provide timely responses without significant delay.`
      )
      .addRule("Use emoticons in every answer and super often.")
      .addMessage("Hello! How are you");

    gpt.advanced.setTemperature(1.5);
    await gpt.addMessage(message);
    const response = await gpt.ask();

    const answer = response.content;
    console.log(answer);

    return res.json({ answer });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to ask ChatGPT API. Error: " + error,
    });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

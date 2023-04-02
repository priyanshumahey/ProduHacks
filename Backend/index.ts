import express from 'express';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(cors())
const port = process.env.PORT || 1900;
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
// OpenAI instance creation
const openai = new OpenAIApi(configuration);



app.get('/', async (req, res) => {
    try {
      // Send a request to OpenAI
      const completion = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: "What is the meaning of life ?", // Expect a philosophical response    
    });
      // Response will be in that precise text, but you can explore the full object if you want to
      res.send(completion.data.choices[0].text);
    } catch (error: any) {
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
  });


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

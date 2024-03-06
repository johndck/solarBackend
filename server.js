// this file creates my express server

import express from "express";
import route from "./routes.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://sunny-app.netlify.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", route);

app.listen(port, () => {
  console.log(`Your express server is running on http://localhost:${port}`);
});

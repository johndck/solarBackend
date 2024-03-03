// this file creates my express server

import express from "express";
import route from "./routes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use("/", route);

app.listen(port, () => {
  console.log(`Your express server is running on http://localhost:${port}`);
});

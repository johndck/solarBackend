import express from "express";
import getPost from "./api.test.js";
import getPostcodes from "./postcodeAutocomplete.js";
import getLat from "./postcode.js";
import sendEmailRouter from "./sendEmail.js";

const router = express.Router();

// API endpoint for EU Solar Potential Data

router.get("/api/solar", async (req, res) => {
  const lat = Number(req.query.lat);
  const long = Number(req.query.long);
  console.log(lat, long);
  const data = await getPost(lat, long);
  res.json(data);
  console.log("from the router");
  console.log(data);
});

// API endpoint for the UK Postcode Autocomplete

router.get("/api/auto", async (req, res) => {
  const code = req.query.code;
  console.log(code);
  const data = await getPostcodes(code);
  res.json(data);
  console.log("from the router");
  console.log(data);
});

// API endpoint to get the Long and Lat of a UK Postcode

router.get("/api/getLat", async (req, res) => {
  const postcode = req.query.postcode;
  console.log(postcode);
  const data = await getLat(postcode);
  res.json(data);
  console.log("from the router");
  console.log(data);
});

//API endpoint for the contact email submission

router.use("/api/send-email", sendEmailRouter);

export default router;

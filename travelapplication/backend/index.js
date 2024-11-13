const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGODBD_URL)
  .then(() => console.log("Connected to Mongo"))
  .catch((er) => console.log(er));
app.get("/", (req, res) => {
  res.send("Hello World! with react native");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

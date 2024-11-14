const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;
const authRouter = require("./routes/auth");
const errorHandler = require("./middlewares/errorHandling");
const mongoose = require("mongoose");
dotenv.config();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extends: true }));

app.use(errorHandler);
app.use("/api/", authRouter);
app.use("/api/users", userRouter);
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

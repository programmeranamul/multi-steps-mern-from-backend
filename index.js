const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FormData = require("./Models.js/formModel");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://multiFromAdmin:4HJddKj83aqla10Y@cluster0.5yvtj.mongodb.net/multi-steps-from?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen( 9090 , () => {
      console.log("App is running");
    })
  )
  .catch((e) => console.log(e));

app.post("/addData", (req, res) => {
  const newData = new FormData(req.body);
  newData.save((error, data) => {
    if (error) {
      res.status(400).json(error);
    }
    if (data) {
      res.status(201).json(data);
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hey, I am programmer anamul" });
});

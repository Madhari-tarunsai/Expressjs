const express = require("express");
const app = express();
app.get("/one", (req, res) => {
  res.send("hi im from get data");
  app.post("/one", (req, res) => {
    res.send("hi im from post data");
  });
  app.patch("/one", (req, res) => {
    res.send("hi im from patch data");
  });
});
app.listen("1234", () => {
  console.log("server running");
});

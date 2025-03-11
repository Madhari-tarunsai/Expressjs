const express = require("express");
const app = express();
const fs = require("fs");
app.get("/data", (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
        let parsdata=JSON.parse(data)
        res.setHeader("content-type","application/json")
        res.status(200).json({statuscode:"200",message:"data retervied sucessfully",response:parsdata})
        // res.json(parsdata)
        // res.json(data);
    }
  });
});
app.listen("3456", () => {
  console.log("server is running");
});

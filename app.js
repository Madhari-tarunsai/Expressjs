const express = require("express");
const app = express();
const fs = require("fs").promises;
app.get("/data",async (req, res) => {
 let data=await fs.readFile ("./users.json","utf8")
 let parsdata=JSON.parse(data)
 res.status(200).json({
    statuscode:200,message:"data retrived",data:parsdata
 })
});
app.listen("3457", () => {
  console.log("server is running");
});

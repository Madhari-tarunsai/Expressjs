// const express = require("express");
// const app = express();
// const fs = require("fs").promises;
// app.get("/data",async (req, res) => {
//     try{
//         let data = await fs.readFile("./user.json", "utf8");
//         let parsedData = JSON.parse(data);
//         res.status(200).json({
//             statusCode: 200,
//             message: "Data retrieved successfully",
//             data: parsedData
//         });
//     }
//     catch(err){
//         res.status(500).send(err)
    
//     }

// });
// app.listen("3457", () => {
//   console.log("server is running");
// });



const express = require("express");
const app = express();
const fs = require("fs").promises;

app.get("/data", async (req, res) => {
    try {
        let data = await fs.readFile("./user.json", "utf8");
        let parsedData = JSON.parse(data);
        res.status(200).json({
            statusCode: 200,
            message: "Data retrieved successfully",
            data: parsedData
        });
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: "Failed to retrieve data",
            error: err.message // Send only the error message for security reasons
        });
    }
});

app.listen(3457, () => {
    console.log("Server is running on port 3457");
});

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path")
const connectDB =require("./config/connectDB.js")


//Port
const PORT =  process.env.PORT || 8080;

// Middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

//Routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transactions",require("./routes/transactionRoutes"))

//ststic files
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.get("/", (req, res) => {
    res.send("Hi! I am Omprakash Live")
});


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        
        app.listen(PORT, () => {
            console.log(`${PORT} Yes i am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();














const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require("./config/db");

// dotenv config
dotenv.config();  // if .env file is inside then give full path

// mongoDb connecetion
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// routes
// app.get("/", (req, res) => {
    //     res.status(200).json({
//         message : "Welcome to Blood Bank App"
//     })
// });

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

// Port
const PORT=process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log(`Node server is running in ${process.env.DEV_MODE} modeOn on the port ${process.env.PORT}`.rainbow);
    console.log(colors.rainbow('OMG Rainbows!'));
    // console.log(colors.red.underline('i like cake and pies'));
})
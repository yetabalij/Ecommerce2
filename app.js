const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
//const expressValidator = require("express-validator");
require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });

//middlwares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
//app.use(expressValidator());

//routes middleware
app.use("/api", authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

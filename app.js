const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//import routes
const userRoutes = require("./routes/user");

//app
const app = express();

// //db

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  });

//routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

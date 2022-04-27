require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTemFiles: true,
  })
);

//connect to mongodb
const URI = process.env.MONGODB_URI;
//console.log(URI);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db connection is successfull"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ msg: "welcom" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

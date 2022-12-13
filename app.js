const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://Mahad:Admin123@node-tuts.qwrsbgw.mongodb.net/node_auth";
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, {
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

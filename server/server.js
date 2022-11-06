const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const routertransction = require("./routes/transctions");
const connext = require("./database/mangodb");
const routerAuthApi = require("./routes/AuthApi");
const passport = require("passport");



const PORT = 4000;
const app = express(); 
app.use(cors());

app.use(bodyParser.json());
app.use(passport.initialize());


connext();

app.use("/transaction", routertransction);
app.use("/auth", routerAuthApi);

app.get("/", (req, res) => {
  res.send("Hello world Transaction Api");
});

app.listen(PORT, (req, res) => {
  console.log("servr runing at http://localhost:4000 ");
});

const Transaction = require("../models/transaction.js");
const express = require("express");
const bcrypt = require("bcrypt");
const usermodel = require("../models/User.js");
const jwt= require("jsonwebtoken")
const routerAuthApi = express.Router();


routerAuthApi.post("/register", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const userCheck = await usermodel.findOne({ email });

  //    console.log(user)
  // userCheck if the eamil is already registered then re will return the function
  if (userCheck) {
    res.status(406).json({ message: "user already exists" });
    return;
  }
//chEcking user is existd and already or registered and will  
  //hash the user password
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  console.log(hashedPassword);

  const user = await usermodel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });
  await user.save();
  res.json({ message: "user is Created" });
});

routerAuthApi.get("/register", (req, res) => {
  res.status(201).send(`Hallo welcome register ${req.params}`);
});

routerAuthApi.post("/login", async(req, res) => {
   const {email,password} = req.body ;

   const userExists = await usermodel.findOne({ email });
   if (!userExists) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }


  const matched =await bcrypt.compare(password,userExists.password)

  if(!matched){
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  // create jwt token
     const payload  ={
      username:email,
      _id:userExists._id,
     }
  const token = jwt.sign(payload,"some secret." );

  console.log(token);

     res.json({message:"succesfully logged in.",token})


});

module.exports = routerAuthApi;

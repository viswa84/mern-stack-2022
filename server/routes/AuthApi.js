const Transaction = require("../models/transaction.js");

const express = require("express");

const routerAuthApi = express.Router();

routerAuthApi.post('/register' , (req, res)=>{

    res.json({message: "user is Created"});

});

routerAuthApi.get("/register", (req, res)=>{
    res.send(`Hallo welcome register ${req.params}`)
})

module.exports =routerAuthApi;
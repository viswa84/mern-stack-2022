const Transaction = require("../models/transaction.js");
const passport = require("passport");

const express = require("express");

const routertransction = express.Router();

routertransction.get(
  "/",
 
  async (req, res) => {
    const transcation = await Transaction.find({}).sort({ createdAt: -1 });
    res.json({ data: transcation });
  }
);

routertransction.post("/", async (req, res) => {
  const { amount, description, date } = req.body;

  const transaction = new Transaction({
    amount,
    description,
    date,
  });

  await transaction.save();

  res.json({ message: "Sucess" });
});
routertransction.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Transaction.findByIdAndDelete(id);
  res.json({ message: "Sucess" });
});

routertransction.patch("/:id", async (req, res) => {
  const id = req.params.id;
  await Transaction.updateOne({ _id: id }, { $set: req.body });

  res.json({ message: "success" });
});

module.exports = routertransction;

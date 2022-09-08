const express = require("express");

const router = express.Router();

module.exports = router;

const { User } = require("../model/model");

// POST API
router.post("/post", async (req, res) => {
  let data = new User(req.body);

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

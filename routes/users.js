const express = require("express");
const userRouter = express.Router();

const db = require("../db");

userRouter.get("/alluser", async (req, res) => {
  try {
    const response = await db.promise().query("SELECT * FROM users");
    // console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
});


userRouter.post("/getuser", async (req, res) => {
   const user = req.body.username;
   //+ user1 +
 //  console.log(user)
  try {
    const response = await db.promise()
      .query('SELECT  *  FROM users WHERE username = ?' , [user]);
    console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
});

module.exports = userRouter;

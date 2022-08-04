const express = require("express");
const userRouter = express.Router();

const db = require("../db");

userRouter.get("/alluser", async (req, res) => {
  try {
    const response = await db.promise().query("SELECT username , name_of_user , email , mobile_number  ,user_type FROM users");
    // console.log(response[0])
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
});


userRouter.post("/getuser", async (req, res) => {
   const user = req.body.username;
   
 //  console.log(user)
  try {
    const response = await db.promise()
      .query(`SELECT  *  FROM users WHERE username = '${user}'` );
   
    res.status(200).json(response[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: error.massage });
  }
});


userRouter.delete("/deletuser", async (req, res) => {
    const user = req.body.username;
    
  //  console.log(user)
   try {
     const response = await db.promise()
       .query(`DELETE  FROM users WHERE username = '${user}'` );
     //console.log(response[0])
     res.status(200).json(response[0]);
   } catch (error) {
     console.log(error);
     res.status(400).json({ massage: error.massage });
   }
 });

module.exports = userRouter;

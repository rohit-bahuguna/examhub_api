const express = require("express");
const userRouter = express.Router();
const {
  RemoveAuser,
  getAuser,
  getAllUser,
  updateAuser,
  addAuser,
} = require("../controllers/userController");

userRouter.get("/alluser", getAllUser);

userRouter.post("/getuser", getAuser);

userRouter.delete("/deletuser", RemoveAuser);

userRouter.post("/adduser", addAuser);

userRouter.put("/updateuser", updateAuser);

module.exports = userRouter

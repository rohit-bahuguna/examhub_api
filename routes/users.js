const express = require("express");
const userRouter = express.Router();
const {
  RemoveAuser,
  getAuser,
  getAllUser,
  updateAuser,
  addAuser,
  logIn,
  updatePassword,
  searchUserDataWithId,
  getUserById
} = require("../controllers/userController");






userRouter.post("/login", logIn);

userRouter.post("/searchuser/:userId", searchUserDataWithId);

userRouter.post("/finduser/", getUserById);

userRouter.post("/updateuserpassword", updatePassword);

userRouter.get("/alluser", getAllUser);

userRouter.post("/getuser", getAuser);

userRouter.delete("/deletuser", RemoveAuser);

userRouter.post("/adduser", addAuser);

userRouter.put("/updateuser", updateAuser);

module.exports = userRouter

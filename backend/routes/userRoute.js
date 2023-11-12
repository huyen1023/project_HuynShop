const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/checkMail", userController.checkEmail);
userRouter.get("/users", userController.getAll);
userRouter.get("/user/:id", userController.getUser);
userRouter.put("/user/:id", userController.updateUser);
userRouter.put("/updatePassword", userController.updatePassword);

module.exports = userRouter;

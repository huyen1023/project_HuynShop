const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const exception = (e) => {
  return {
    error: "An error occurred!",
    data: e,
  };
};

const userController = {
  checkEmail: async (req, res) => {
    try {
      const { email } = req.body;
      const mail = await User.findOne({ email: email });
      if (!mail) {
        return res.status(400).json({ error: "Email does not exist!" });
      }
      return res.status(200).json({ message: "" });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },
  registerUser: async (req, res) => {
    try {
      const { email, password, fullname, phonenumber } = req.body;
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // check email
      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.status(400).json({ error: "Email already exists!" });
      }
      // create new user
      const newUser = new User({
        email: email,
        password: hashedPassword,
        fullname: fullname || "",
        phonenumber: phonenumber || "",
      });
      // save to db
      const user = await newUser.save();
      res.status(201).json({ message: "Signed up successfully!", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      // check username
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ error: "Wrong username!" });
      }
      // check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Wrong password!" });
      }
      // login
      res.status(200).json({ message: "Login successfully!", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await User.find().populate("orders");
      res
        .status(200)
        .json({ message: "Get all user successfully!", data: users });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("orders");
      res.status(200).json({ message: "Get user successfully", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Update user successfully", data: user });
    } catch (e) {
      res.status(500).json(exception(e));
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const user = await User.findOne({ email: email });
      await user.updateOne({ password: hashed });
      res.status(200).json("Update password successful!");
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = userController;

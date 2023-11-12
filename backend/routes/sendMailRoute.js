const express = require("express");
const sendMailController = require("../controllers/sendMailController");

const sendMailRouter = express.Router();

sendMailRouter.post("", sendMailController.sendMail);

module.exports = sendMailRouter;

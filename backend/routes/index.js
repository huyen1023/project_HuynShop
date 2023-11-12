const userRouter = require("./userRoute");
const productRouter = require("./productRoute");
const orderRouter = require("./orderRoute");
const sendMailRouter = require("./sendMailRoute");
const paymentRouter = require('./paymentRoute')

const route = (app) => {
  app.use("/api/v1", userRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/order", orderRouter);
  app.use("/api/v1/mail", sendMailRouter);
  app.use("/api/v1/payment", paymentRouter)
};

module.exports = route;

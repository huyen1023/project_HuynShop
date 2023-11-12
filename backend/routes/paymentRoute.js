const express = require('express')
const paymentController = require('../controllers/paymentController')

const paymentRouter = express.Router()

paymentRouter.post('/create_payment_url', paymentController.createPayment)
paymentRouter.get('/vnpay_return', paymentController.vnpayReturn)
paymentRouter.get('/vnpay_ipn', paymentController.vnpayIpn)

module.exports = paymentRouter
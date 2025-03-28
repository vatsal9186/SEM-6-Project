import mongoose from "mongoose";

const paymentschema = new mongoose.Schema({
    orderID: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMode: { type: String, required: true },
});

const Payment = mongoose.model.Payment || mongoose.model("Payment", paymentschema);

export default Payment;

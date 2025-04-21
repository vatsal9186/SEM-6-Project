import mongoose  from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type: Number, required: true },
    description: { type: String, required: true },
});

const Feedback = mongoose.model.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;

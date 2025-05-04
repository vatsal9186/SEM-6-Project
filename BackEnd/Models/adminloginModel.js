import mongoose from "mongoose";

const adminloginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const adminloginModel = mongoose.model.amdinlogin || mongoose.model("admin", adminloginSchema);

export default adminloginModel;
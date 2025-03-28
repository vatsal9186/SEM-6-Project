import mongoose from "mongoose";

const adminloginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const adminloginModel = mongoose.model.amdinlogin || mongoose.model("adminlogin", adminloginSchema);

export default adminloginModel;
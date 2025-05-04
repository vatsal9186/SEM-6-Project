import express from "express";
import { allfeedbacklist, deleteFeedback, FeedBack } from "../Controllers/Feedback.controller.js";

const FeedbackRouter = express.Router();

FeedbackRouter.post("/feedback", FeedBack)
FeedbackRouter.get("/all", allfeedbacklist)
FeedbackRouter.delete("/delete", deleteFeedback)

export default FeedbackRouter;
import Feedback from "../Models/feedbackModel.js";

export const FeedBack = async (req, res) => {
  const { name, email, description } = req.body;

  try {
    // OPTIONAL: Check if same feedback already exists by email
    const existingFeedback = await Feedback.findOne({ email, description });
    if (existingFeedback) {
      return res.status(400).json({ message: "Feedback already submitted" });
    }

    const newFeedback = new Feedback({
      name,
      email,
      description
    });

    await newFeedback.save();
    return res.status(201).json({ message: "Feedback submitted successfully" });

  } catch (error) {
    console.error("Error submitting feedback:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const allfeedbacklist = async (req, res) => {
  try{
      const all = await Feedback.find({});
      return res.status(200).json({message: "SUCCESS", data: all})
  }
  catch(error){
      console.error("Error", error)
      return res.status(500).json({message: "Interval server error"})
  }
}

export const deleteFeedback = async (req, res) => {
  try{
    const {id} = req.body;

    if (!id) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const deleteFeedback = await Feedback.findByIdAndDelete(id);

    if (!deleteFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }

    res.json({ message: "Feedback deleted successfully" });

  }
  catch(error){
    res.status(500).json({error: error.message})
  }
}
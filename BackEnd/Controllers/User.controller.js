import User from "../Models/userModel.js";

export const userRegister = async (req, res) => {
    const { fullName, email, mobile, password } = req.body;

    try {
        const userExists = await User.find({ email });
        if (userExists.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({
            fullName,
            email,
            mobile,
            password,
        });

        newUser.save()
            .then(() => {
                return res.status(201).json({ message: "User registered successfully" });
            })
            .catch((error) => {
                console.error("Error saving user:", error);
                return res.status(500).json({ message: "Internal server error" });
            });

    }

    catch (error) {
        console.error("Error checking user existence:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }
        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

export const userlist = async (req, res) => {
    try{
        const all = await User.find({});
        return res.status(200).json({message: "success", data: all})
    }
    catch(error){
        console.error("Error", error)
        return res.status(500).json({message: "Interval server error"})
    }
}

export const userDelete = async (req, res) => {
    const {id} = req.body;

    try{
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        return res.status(200).json({message: "User deleted successfully"})
    }
    catch(error){
        console.error("error", error)
        return res.status(500).json({message: "Internal server error"})
    }
}


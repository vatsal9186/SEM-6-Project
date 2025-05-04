import admin from "../Models/adminloginModel.js"

export const adminlogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const ad = await admin.findOne({ email });
        if (!ad) {
            return res.status(400).json({ message: "User does not exist" })
        }

        if (ad.password !== password) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        return res.status(200).json({ message: "Login Successful", ad })
    }
    catch (error) {
        console.error("Error during login: ", error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const adminRegister = async (req, res) => {
    const { email, password } = req.body;

    try {
        const newUser = new admin({
            email,
            password
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
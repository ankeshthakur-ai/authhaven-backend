import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import auth from '../middleware/authMiddleware.js';


const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) return res.status(400).json({ msg: "User already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.json({ msg: "User created sucessfully" });
    } catch (error) {
        res.status(500).send("Server Error");
    }
});



router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) return res.status(400).json({ msg: "User not exits" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        res.status(500).send("Server Error");
    }
});




router.get("/me", auth, async (req, res) => {
    try {
        // req.user is set by auth middleware to the user's id
        const user = await User.findById(req.user).select("name email");
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ user });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/health', (req, res) => res.json({ ok: true }))






export default router;
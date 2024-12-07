import express from "express"
import Contact from "../models/Contact.js";
const router = express.Router();


// Handle form submission
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate fields
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Save to database
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: 'Message received. Thank you!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

export default router;

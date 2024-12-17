// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const connection = require("./config/db");
require('dotenv').config();



const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;
const users = [];


const SECRET_KEY = 'your_secret_key';


app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;

 
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
});


app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.status(200).json({ message: 'Protected route accessed', user: decoded });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

// Start the server
app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Server is running on port ${PORT} and DB is also Connected`);
    }
    catch(error){
        console.log("Occured error during connecting", error)
    }
}); 
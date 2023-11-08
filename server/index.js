const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:8000/signup"]
}));

// app.options('*', cors());


// database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database is Connected'))
.catch((err) => console.log('Database not connected', err))

// middleware 
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
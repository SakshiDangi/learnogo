const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));
// app.options('*', cors());


// database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database is Connected'))
.catch((err) => console.Console.log('Database not connected', err))

// middleware 
app.use(express.json())


app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
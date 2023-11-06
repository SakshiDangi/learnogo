const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

app.use(cors());
app.use(express.json());




app.listen(3000, () => console.log('server is running on port 3000'));
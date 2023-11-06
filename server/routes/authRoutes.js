const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, signupUser } = require('../controllers/authController')


// middlewares 
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/signup', signupUser)

module.exports = router
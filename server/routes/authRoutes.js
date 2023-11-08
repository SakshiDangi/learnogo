const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, signupUser, loginUser, getCourse } = require('../controllers/authController')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// middlewares 
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/course', getCourse)

module.exports = router
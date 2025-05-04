const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/all', getAllUsers); 
router.put('/forget-password', updatePassword); 

module.exports = router;

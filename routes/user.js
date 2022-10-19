const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');


//create route
const router = express.Router();

// users routes
router.get('/', getAllUser);
router.post('/', createUser);

//export
module.exports = router;
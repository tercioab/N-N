const express = require('express');
const router = express.Router();
const userBook = require('../controllers/userBook.controller')



router.get('/:id', userBook.getUsersBooksById)

module.exports = router 
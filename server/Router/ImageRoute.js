const express = require('express');
const imageController = require('../Controller/Imagecontroler.js'); 
const upload = require('../constants/Multer'); 
const router = express.Router();

router.post('/upload', upload, imageController.imageUpload); 

module.exports = router;

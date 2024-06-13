const express = require('express');
const imgecontroller = require('../Controller/Imagecontroler')
const router = express.Router()

router.post('/Upload',imgecontroller.imageUplod );


module.exports = router;
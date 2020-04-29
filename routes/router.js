var router = require('express').Router();

//FOR DEVELOPMENT ONLY
const cors = require('cors');

router.get('/dayone/:country', cors(), require('./dayone.js'))
router.get('/summary', require('./summary.js'))

module.exports=router
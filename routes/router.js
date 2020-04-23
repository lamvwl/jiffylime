var router = require('express').Router();

router.get('/dayone/:country', require('./dayone.js'))
router.get('/summary', require('./summary.js'))

module.exports=router
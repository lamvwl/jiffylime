var router = require('express').Router();

router.get('/dayone/:country', require('./dayone.js'))

module.exports=router
const express = require("express");

const router=express.Router()

const login=require('../controlers/login')

const stat=require('../controlers/statistics')

router.get('/statistics',login.verify,stat.stats)

module.exports=router

const express = require("express");

const router=express.Router()

router.get('login/student/read')

router.get('login/student/read/:id')

router.post('/login/student/search')

router.post('/login/student/sort')

module.exports=router
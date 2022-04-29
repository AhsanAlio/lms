const express = require("express");

const router=express.Router()

router.get('/login/faculty/read')

router.get('/login/faculty/read/:id')

router.post('/login/faculty/search')

router.post('/login/faculty/sort')

module.exports=router
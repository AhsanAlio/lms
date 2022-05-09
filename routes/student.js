const express = require("express");

const router=express.Router()

const book=require('../controlers/admin/books')

const login=require('../controlers/login')

router.get('/login/student/read',login.verify,book.fetch)

router.get('/login/student/read/:id',login.verify,book.fetch_id)

router.post('/login/student/search',login.verify,book.search)

router.post('/login/student/sort',login.verify,book.sort)

module.exports=router
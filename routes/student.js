const express = require("express");

const router=express.Router()

const book=require('../controlers/admin/books')

const login=require('../controlers/login')

router.get('/login/faculty/read',login.verify,book.fetch)

router.get('/login/faculty/read/:id',login.verify,book.fetch_id)

router.post('/login/faculty/search',login.verify,book.search)

router.post('/login/faculty/sort',login.verify,book.sort)

module.exports=router
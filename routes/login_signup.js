const express = require("express");

const router=express.Router()

const signup=require('../controlers/signup')

const login=require('../controlers/login');

const refreshToken=require('../controlers/refresh');


router.post('/signup',signup.signup)

router.post('/login',login.tokens)

router.get('/refresh',login.refreshverify,refreshToken.refresh)

module.exports=router
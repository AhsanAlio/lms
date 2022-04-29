const express = require("express");

const router=express.Router()

const signup=require('../controlers/signup')

const login=require('../controlers/login')

router.post('/signup',signup.signup)

router.post('/login',login.tokens)

// router.post('/api/book/createOne',login.verify,(req, res) => {
//     console.log('Create Book API Called!');
//     let user = req.user;
  
//     console.log('User:', user);
  
//     if(user.occupation =='librarian') {
//       return res.json({
//         status: "success",
//         message: "You have the authentication for crating new book!"
//       })
//     } else {
//       return res.status(401).json({
//         status: "error",
//         message: "you have to login as admin!"
//       })
//     }
//   })

module.exports=router
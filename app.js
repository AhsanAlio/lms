const express=require('express')
const bodyparser=require('body-parser')
const login_signup=require('./routes/login_signup')
const libra=require('./routes/librarian')
const app=express();
app.use(bodyparser.json())

app.use(login_signup)
app.use(libra)

app.listen(3000)
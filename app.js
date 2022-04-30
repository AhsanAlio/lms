const express=require('express')

const bodyparser=require('body-parser')

const login_signup=require('./routes/login_signup')

const libra=require('./routes/librarian')

const fact=require('./routes/faculty')

const stud=require('./routes/student')

const app=express();

app.use(bodyparser.json())

app.use(login_signup)
app.use(libra)
app.use(fact)
app.use(stud)

app.listen(3000)
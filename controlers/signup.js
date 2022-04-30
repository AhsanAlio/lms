const { redirect } = require('express/lib/response');
const db=require('../database')

// To Create Data
exports.signup=(req,res,next)=>{

    function validateEmail(email) 
        {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

    function validateusername(email) 
    {
        var re = /^[a-zA-Z0-9]+$/;
        return re.test(email);
    }


    let name=req.body.name
    let username=req.body.username
    let password=req.body.password
    let email=req.body.email
    let phone_no=req.body.phone_no
    let gender=req.body.gender
    let occupation=req.body.occupation

    if(validateEmail(email)==true && validateusername(username==true)){

        console.log('hello')

        const unique=db.query('select username,password,email from users where username=$1 or password=$2 or email=$3',[username,password,email])

        if(unique==null){

            console.log('elif')
            res.status(400).json({
            status: "Error",
            message: "username or password or email already in uses",
        });  
        }
        else{

            let date=new Date().toISOString().slice(0, 10)

            sql='insert into users(name,username,password,email,phone_no,gender,occupation,date) values($1,$2,$3,$4,$5,$6,$7,$8) returning *;'
            
            sql2='insert into user_rule(username,password,email,occupation,date) values ($1,$2,$3,$4,$5)'

            db.query(sql,[name,username,password,email,phone_no,gender,occupation,date],(err,result)=>{

                if(!err) {

                    db.query(sql2,[username,password,email,occupation,date],(err)=>{
                            if(err)
                                console.log(JSON.stringify(err)
                        )})

                    res.status(200).json({
                        status: "success",
                        message: "data inserted!",
                        data: result.rows
                    });
                }
                else
                    res.status(400).json({
                    status: "Error",
                    message: "username or password or email already in uses",
                }); 
            })

        }
    }
    else{
        res.status(400).json({
            status: "Error",
            message: "not valid username or email",
    });
    }
}
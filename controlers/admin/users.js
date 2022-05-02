const db=require('../database_reference')
const insert_users=require('../signup')


// Users

// To Create data in users

exports.insert=(req,res)=>{

    const token = `${req.headers.authorization}`;
    const tokenDecodablePart = token.split('.')[1];
    const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
    let obj = JSON.parse(decoded);
    if(obj.occupation=='librarian'){

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

            const unique=db.query('select username,password,email from users where username=$1 or password=$2 or email=$3',[username,password,email])

            if(unique==null){

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
                            data:result.rows
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
    else{
        res.json({message:'please login as librarien'})
    }
}

//To Delete Data from users
exports.delete=(req,res)=>{

    const token = `${req.headers.authorization}`;
    const tokenDecodablePart = token.split('.')[1];
    const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
    let obj = JSON.parse(decoded);
    if(obj.occupation=='librarian'){

        sql='delete from users where id=$1 returning *;'

        db.query(sql,[req.params.id],(err,result)=>{

            if(!err) {

                res.status(200).json({
                    status: "success",
                    message: "data deleted!",
                    data: result.rows
                });
            }
            else
                res.status(500).json({
                status: "Error",
                message: "Query Execution Error!"
            });
        })
    }
    else{
        res.json({message:'please login as librarien'})
    }
}

// To Fecth Data from users

exports.fetch=(req,res)=>{

    sql='select * from users'

    db.query(sql,(err,result)=>{

        if(!err) {

            res.status(200).json({
                status: "success",
                message: "data Found!",
                data: result.rows
            });
        }
        else
            res.status(500).json({
            status: "Error",
            message: "Query Execution Error!"
        });
    })
}

// To Fecth Data from users by id

exports.fetch_id=(req,res)=>{

    sql='select * from users where id=$1;'

    db.query(sql,[req.params.id],(err,result)=>{

        if(!err) {

            res.status(200).json({
                status: "success",
                message: "data Found!",
                data: result.rows
            });
        }
        else
            res.status(500).json({
            status: "Error",
            message: "Query Execution Error!"
        });
    })
}

// To update data from users by id

exports.update=(req,res,next)=>{

    const token = `${req.headers.authorization}`;
    const tokenDecodablePart = token.split('.')[1];
    const decoded = Buffer.from(tokenDecodablePart, 'base64').toString();
    let obj = JSON.parse(decoded);
    if(obj.occupation=='librarian'){

        let sql=`update users set `

        if(req.body.name) {
            sql = sql + `name = '${req.body.name}',`;
        }

        if(req.body.username) {
            sql = sql + `username = '${req.body.username}',`;
        }

        if(req.body.password) {
            sql = sql + `password = '${req.body.password}',`;
        }

        if(req.body.email) {
            sql = sql + `email = '${req.body.email}',`;
        }

        if(req.body.phone_no) {
            sql = sql + `phone_no = '${req.body.phone_no}',`;
        }

        if(req.body.gender) {
            sql = sql + `gender = '${req.body.gender}',`;
        }

        if(req.body.occupation) {
            sql = sql + `occupation = '${req.body.occupation}',`;
        }

        sql = sql.slice(0, -1); 
        sql = sql+ ` WHERE id = $1 returning*;`;

        db.query(sql,[req.params.id],(err,result)=>{

            if(!err) {

                res.status(200).json({
                    status: "success",
                    message: "data updated!",
                    data: result.rows
                });
            }
            else
                res.status(500).json({
                status: "Error",
                message: "Query Execution Error!"
            });
        })
    }
    else{
        res.json({message:'please login as librarien'})
    }
}

// To search  and filter data from users

exports.search=(req,res,next)=>{

    let sql=`select * from users where `

    if(req.body.name) {
        sql = sql + `name = '${req.body.name}' and `;
    }

    if(req.body.username) {
        sql = sql + `username = '${req.body.username}' and `;
    }

    if(req.body.password) {
        sql = sql + `password = '${req.body.password}' and `;
    }

    if(req.body.email) {
        sql = sql + `email = '${req.body.email}' and `;
    }

    if(req.body.phone_no) {
        sql = sql + `phone_no = ${req.body.phone_no} and `;
    }

    if(req.body.gender) {
        sql = sql + `gender = '${req.body.gender}' and `;
    }

    if(req.body.occupation) {
        sql = sql + `occupation = '${req.body.occupation}' and `;
    }

    if(req.body.id) {
        sql = sql + `id = ${req.body.id} and `;
    }

    sql = sql.slice(0, -4); 

    db.query(sql,(err,result)=>{

        if(result.rows.length<=0)
        {
            res.status(404).json({
                status: "Failed",
                message: "data Not Found!"
            });
        }

        else if(!err) {

            res.status(200).json({
                status: "success",
                message: "data Found!",
                data: result.rows

            });
        }
        else
            res.status(500).json({
            status: "Error",
            message: "Query Execution Error!"
        });
    })
}

// to sort data from users
exports.sort=(req,res,next)=>{

    let username=req.body.username
    let date=req.body.date

    let sql=`select id,name,username,password,email,phone_no,gender,occupation,date from users order by name ${username} , date ${date}`
    db.query(sql,(err,result)=>{

        if(!err) {

            res.status(200).json({
                status: "success",
                message: "data Found!",
                data: result.rows

            });
        }
        else
        res.status(500).json({
            status: "Error",
            message: "Query Execution Error!"
        });
    })
}
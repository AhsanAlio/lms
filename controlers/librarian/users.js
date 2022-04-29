const db=require('../database_reference')
const insert_users=require('../signup')


// Users

// To Create data in users

exports.insert=insert_users.signup

//To Delete Data from users
exports.delete=(req,res)=>{

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
            message: "Query Execution Error!",
            data: result.rows
        });
    })
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
            message: "Query Execution Error!",
            data: result.rows
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
            message: "Query Execution Error!",
            data: result.rows
        });
    })
}

// To update data from users by id

exports.update=(req,res,next)=>{

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
            message: "Query Execution Error!",
            data: result.rows
        });
    })
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
            message: "Query Execution Error!",
            data: result.rows
        });
    })
}

// to sort data from users
exports.sort=(req,res,next)=>{

    let username=req.body.username
    let date=req.body.date

    let sql=`select name,username,password,email,phone_no,gender,occupation from users order by name ${username} , date ${date}`
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
            message: "Query Execution Error!",
            data: result.rows
        });
    })
}
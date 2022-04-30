const db=require('../database_reference')


// payment

// To Create data in payment

exports.insert=(req,res)=>{

    let username=req.body.username
    let email=req.body.email
    let book_name=req.body.book_name
    let pay_type=req.body.pay_type
    let date=new Date().toISOString().slice(0, 10)

    sql='insert into payment(username,email,book_name,pay_type,date) values ($1,$2,$3,$4,$5) returning*;'

    db.query(sql,[username,email,book_name,pay_type,date],(err,result)=>{


        if(!err){

            res.status(200).json({
                status:'success',
                message:'data inserted!',
                date:result.rows
            })
        }
        else
            res.status(500).json({
            status: "Error",
            message: "Query Execution Error!"
        });

    })
}

//To Delete Data from payment
exports.delete=(req,res)=>{

    sql='delete from payment where id=$1 returning *;'

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

// To Fecth Data from payment

exports.fetch=(req,res)=>{

    sql='select * from payment'

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

// To Fecth Data from payment by id

exports.fetch_id=(req,res)=>{

    sql='select * from payment where id=$1;'

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

// To update data from payment by id

exports.update=(req,res,next)=>{

    let sql=`update payment set `

    if(req.body.username) {
        sql = sql + `username = '${req.body.username}',`;
    }

    if(req.body.email) {
        sql = sql + `email = '${req.body.email}',`;
    }

    if(req.body.book_name) {
        sql = sql + `book_name = '${req.body.book_name}',`;
    }

    if(req.body.pay_type) {
        sql = sql + `pay_type = '${req.body.pay_type}',`;
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

// To search  and filter data from payment

exports.search=(req,res,next)=>{

    let sql=`select * from payment where `

    if(req.body.username) {
        sql = sql + `username = '${req.body.username}' and `;
    }

    if(req.body.email) {
        sql = sql + `email = '${req.body.email}' and `;
    }

    if(req.body.book_name) {
        sql = sql + `book_name = '${req.body.book_name}' and `;
    }

    if(req.body.pay_type) {
        sql = sql + `pay_type = '${req.body.pay_type}' and `;
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

// to sort data from payment
exports.sort=(req,res,next)=>{

    let username=req.body.username
    let date =req.body.date

    let sql=`select id,username,email,book_name,pay_type,date from payment order by username ${username} , date ${date}`
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
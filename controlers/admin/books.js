
const db=require('../database_reference')


// books

// To Create data in books

exports.insert=(req,res)=>{

    let uuid = require('uuid');
    let uuid2=uuid.v4();
    let uuid3=uuid2.slice(0,-21);

    let title=req.body.title
    let price=req.body.price
    let author=req.body.author
    let description=req.body.description
    let subject=req.body.subject
    let isbn_no=uuid3
    let date=new Date().toISOString().slice(0, 10)
    let copy=req.body.copy

    const copies=db.query('select copy from books where copy=$1',[copy])

    if(copies==null){

        sql='insert into books(title,price,author,description,date,subject,isbn_no,copy) values ($1,$2,$3,$4,$5,$6,$7,$8)'

        db.query(sql,[title,price,author,description,date,subject,isbn_no],copy,(err,result)=>{

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
                message: "Query Execution Error!",
                data: result.rows
            });

        })
    }
    else{
        copy=copy+1
    }
}

//To Delete Data from books
exports.delete=(req,res)=>{

    sql='delete from books where id=$1 returning *;'

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

// To Fecth Data from books

exports.fetch=(req,res)=>{

    sql='select * from books'

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

// To Fecth Data from books by id

exports.fetch_id=(req,res)=>{

    sql='select * from books where id=$1;'

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

// To update data from books by id

exports.update=(req,res,next)=>{

    let sql=`update books set `

    if(req.body.title) {
        sql = sql + `title = '${req.body.title}',`;
    }

    if(req.body.author) {
        sql = sql + `author = '${req.body.author}',`;
    }

    if(req.body.price) {
        sql = sql + `price = '${req.body.price}',`;
    }

    if(req.body.description) {
        sql = sql + `description = '${req.body.description}',`;
    }

    if(req.body.subject) {
        sql = sql + `subject = '${req.body.subject}',`;
    }

    if(req.body.isbn_no) {
        sql = sql + `isbn_no = '${req.body.isbn_no}',`;
    }

    if(req.body.id) {
        sql = sql + `id = ${req.body.id} and `;
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

// To search  and filter data from books

exports.search=(req,res,next)=>{

    let sql=`select * from books where `

    if(req.body.title) {
        sql = sql + `title = '${req.body.title}' and `;
    }

    if(req.body.author) {
        sql = sql + `author = '${req.body.author}' and `;
    }

    if(req.body.price) {
        sql = sql + `price = '${req.body.price}' and `;
    }

    if(req.body.description) {
        sql = sql + `description = '${req.body.description}' and `;
    }

    if(req.body.subject) {
        sql = sql + `subject = '${req.body.subject}',`;
    }

    if(req.body.isbn_no) {
        sql = sql + `isbn_no = '${req.body.isbn_no}',`;
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

// to sort data from books
exports.sort=(req,res,next)=>{

    let username=req.body.username
    let copy =req.body.copy

    let sql=`select id,title,price,author,description,date,subject,isbn_no from books order by subject ${username} , date ${copy}`
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
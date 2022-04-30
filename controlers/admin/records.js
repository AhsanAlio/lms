const db=require('../database_reference')


// records

// To Create data in records

exports.insert= async(req,res)=>{

    let username=req.body.username
    let email=req.body.email
    let book_name=req.body.book_name
    let total_book_reference=await db.query('SELECT count(*) FROM records');
    let total_book=total_book_reference.rows[0].count
    let date=new Date().toISOString().slice(0, 10)

    sql=`insert into records(username,email,book_name,date,total_book) values ($1,$2,$3,$4,${total_book}) returning*;`

    db.query(sql,[username,email,book_name,date],(err,result)=>{

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

//To Delete Data from records
exports.delete=(req,res)=>{

    sql='delete from records where id=$1 returning *;'

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

// To Fecth Data from records

exports.fetch=(req,res)=>{

    sql='select * from records'

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

// To Fecth Data from records by id

exports.fetch_id=(req,res)=>{

    sql='select * from records where id=$1;'

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

// To update data from records by id

exports.update=(req,res)=>{

    let sql=`update records set `

    if(req.body.username) {
        sql = sql + `username = '${req.body.username}',`;
    }

    if(req.body.email) {
        sql = sql + `email = '${req.body.email}',`;
    }

    if(req.body.book_name) {
        sql = sql + `book_name = '${req.body.book_name}',`;
    }

    if(req.body.total_book) {
        sql = sql + `total_book = '${req.body.total_book}',`;
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

// To search  and filter data from records

exports.search=(req,res,next)=>{

    let sql=`select * from records where `

    if(req.body.username) {
        sql = sql + `username = '${req.body.username}' and `;
    }

    if(req.body.email) {
        sql = sql + `email = '${req.body.email}' and `;
    }

    if(req.body.book_name) {
        sql = sql + `book_name = '${req.body.book_name}' and `;
    }

    if(req.body.total_book) {
        sql = sql + `total_book = '${req.body.total_book}' and `;
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

// to sort data from records
exports.sort=(req,res,next)=>{

    let username=req.body.username
    let date=req.body.date

    let sql=`select id,username,email,book_name,total_book,date from records order by username ${username} , date ${date}`
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
const psql=require('pg-pool')

const pool=new psql({
    host:'localhost',
    user:'postgres',
    port:5432,
    database:'lms',
    password:'qwerty78'
})

pool.connect((err)=>{
    if(!err)
        console.log('database is connected')
    else
        console.log(JSON.stringify(err))
})

module.exports=pool
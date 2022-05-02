const db=require('../database')

exports.stats= async (req,res)=>{
    let Highest_lent_book=1;
    let Most_Active_User=2;
    let Oldest_Book= await db.query('select * from books order by date asc limit 1')
    let Newest_Book= await db.query('select * from books order by date desc limit 1')
    let Total_Users= await db.query('SELECT count(*) FROM users');
    let Total_Books= await db.query('SELECT count(*) FROM books');
    let Total_lent_book= await db.query('SELECT count(*) FROM payment');
    let Most_Available_Book= await db.query('SELECT count(*) FROM books');

   
    res.json({
        status:"success",
        Message:"Data Found!",
        data:{
            Highest_lent_book:Highest_lent_book,
            Most_Active_User:Most_Active_User,
            Oldest_Book:Oldest_Book.rows,
            Newest_Book:Newest_Book.rows,
            Total_Users:Total_Users.rows[0].count,
            Total_Books:Total_Books.rows[0].count,
            Total_lent_book:Total_lent_book.rows[0].count,
            Most_Available_Book:parseInt(Most_Available_Book.rows[0].count) - parseInt(Total_lent_book.rows[0].count)
        }
    })
}
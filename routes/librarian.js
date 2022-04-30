const express = require("express");

const router=express.Router()

const login=require('../controlers/login')

const lib_users=require('../controlers/admin/users')
const lib_paym=require('../controlers/admin/payment')
const lib_rec=require('../controlers/admin/records')
const lib_books=require('../controlers/admin/books');

//Books
router.get('/login/librarian/books/read',login.verify,lib_books.fetch)
router.get('/login/librarian/books/read/:id',login.verify,lib_books.fetch_id)
router.delete('/login/librarian/books/delete/:id',login.verify,lib_books.delete)
router.post('/login/librarian/books/insert',login.verify,lib_books.insert)
router.post('/login/librarian/books/update/:id',login.verify,lib_books.update)
router.post('/login/librarian/books/search',login.verify,lib_books.search)
router.post('/login/librarian/books/sort',login.verify,lib_books.sort)

// Users

router.get('/login/librarian/users/read', login.verify,lib_users.fetch)
router.get('/login/librarian/users/read/:id',login.verify,lib_users.fetch_id)
router.delete('/login/librarian/users/delete/:id',login.verify,lib_users.delete)
router.post('/login/librarian/users/insert',login.verify,lib_users.insert)
router.post('/login/librarian/users/update/:id',login.verify,lib_users.update)
router.post('/login/librarian/users/search',login.verify,lib_users.search)
router.post('/login/librarian/users/sort',login.verify,lib_users.sort)

// Records
router.get('/login/librarian/records/read',login.verify,lib_rec.fetch)
router.get('/login/librarian/records/read/:id',login.verify,lib_rec.fetch_id)
router.delete('/login/librarian/records/delete/:id',login.verify,lib_rec.delete)
router.post('/login/librarian/records/insert',login.verify,lib_rec.insert)
router.post('/login/librarian/records/update/:id',login.verify,lib_rec.update)
router.post('/login/librarian/records/search',login.verify,lib_rec.search)
router.post('/login/librarian/records/sort',login.verify,lib_rec.sort)


// Payment
router.get('/login/librarian/payment/read',login.verify,lib_paym.fetch)
router.get('/login/librarian/payment/read/:id',login.verify,lib_paym.fetch_id)
router.delete('/login/librarian/payment/delete/:id',login.verify,lib_paym.delete)
router.post('/login/librarian/payment/insert',login.verify,lib_paym.insert)
router.post('/login/librarian/payment/update/:id',login.verify,lib_paym.update)
router.post('/login/librarian/payment/search',login.verify,lib_paym.search)
router.post('/login/librarian/payment/sort',login.verify,lib_paym.sort)

module.exports=router
const express = require("express");

const router=express.Router()

const lib_users=require('../controlers/librarian/users')
const lib_paym=require('../controlers/librarian/payment')
const lib_rec=require('../controlers/librarian/records')
const lib_books=require('../controlers/librarian/books')

//Books
router.get('/login/librarian/books/read',lib_books.fetch)
router.get('/login/librarian/books/read/:id',lib_books.fetch_id)
router.post('/login/librarian/books/delete/:id',lib_books.delete)
router.post('/login/librarian/books/insert',lib_books.insert)
router.post('/login/librarian/books/update/:id',lib_books.update)
router.post('/login/librarian/books/search',lib_books.search)
router.post('/login/librarian/books/sort',lib_books.sort)

// Users
router.get('/login/librarian/users/read',lib_users.fetch)
router.get('/login/librarian/users/read/:id',lib_users.fetch_id)
router.delete('/login/librarian/users/delete/:id',lib_users.delete)
router.post('/login/librarian/users/insert',lib_users.insert)
router.post('/login/librarian/users/update/:id',lib_users.update)
router.post('/login/librarian/users/search',lib_users.search)
router.post('/login/librarian/users/sort',lib_users.sort)

// Records
router.get('/login/librarian/records/read',lib_rec.fetch)
router.get('/login/librarian/records/read/:id',lib_rec.fetch_id)
router.post('/login/librarian/records/delete/:id',lib_rec.delete)
router.post('/login/librarian/records/insert',lib_rec.insert)
router.post('/login/librarian/records/update/:id',lib_rec.update)
router.post('/login/librarian/records/search',lib_rec.search)
router.post('/login/librarian/records/sort',lib_rec.sort)


// Payment
router.get('/login/librarian/payment/read',lib_paym.fetch)
router.get('/login/librarian/payment/read/:id',lib_paym.fetch_id)
router.post('/login/librarian/payment/delete/:id',lib_paym.delete)
router.post('/login/librarian/payment/insert',lib_paym.insert)
router.post('/login/librarian/payment/update/:id',lib_paym.update)
router.post('/login/librarian/payment/search',lib_paym.search)
router.post('/login/librarian/payment/sort',lib_paym.sort)

module.exports=router
const express = require('express');
const Book = require('./book.model');
const { createBook, getAllBooks, getSingleBook, updateBook, deleteBook, searchBooks, getRecommendedBooks } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

const router = express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", verifyAdminToken, createBook)


// get all books
router.get("/", getAllBooks);

// search books endpoint
router.get("/search", searchBooks);

// get recommended books endpoint
router.get("/recommended", getRecommendedBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id",verifyAdminToken, updateBook);

router.delete("/:id",verifyAdminToken, deleteBook)


module.exports = router;

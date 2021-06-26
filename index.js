// framework
const { request, response } = require("express");
const express = require("express");

//Database
const database = require("./database/index");

//Initializing express
const TheBook = express();

//configuration
TheBook.use(express.json());

/* 
Route        /
Description  get all the books
Access       PUBLIC
Parametes    NONE
Method       GET
*/ 

TheBook.get("/" , (request, response) => {
    
    return response.json({ books: database.books});
});

/* 
Route        /
Description  get specifiv book based on isbn
Access       PUBLIC
Parametes    isbn
Method       GET
*/ 

TheBook.get("/:isbn", (request, response) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === request.params.isbn
        );

        if(getSpecificBook.length === 0){
            return response.json({
                 error: `No book found ${req.params.isbn}`,
        });
        }

        return response.json({book: getSpecificBook})


});

/* 
Route        /category/
Description  get specific book based on a catagory
Access       PUBLIC
Parametes    catagory
Method       GET
*/ 

TheBook.get("/c/:category", (request, response) => {
    const getSpecificBooks = database.books.filter((book) => 
    book.category.includes(request.params.category)
        );

        if(getSpecificBooks.length === 0){
            return response.json({
                 error: `No book found for c${req.params.category}`,
        });
        }

        return response.json({books: getSpecificBooks});


});
 



TheBook.listen(3000, () => console.log("Server is running..."))


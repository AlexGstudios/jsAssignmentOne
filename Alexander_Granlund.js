"use strict"

var books = [];

function book(name, genre, pages, isbnNum){
    this.name = name;
    this.genre = genre;
    this.pages = pages;
    this.isbnNum = isbnNum;
    this.getBookInfo = function(){
        console.log("book: " + this.name + "\nGenre: " + this.genre + "\nPages: " + this.pages + "\nISBN: " + this.isbnNum + "\n------------------");
    };
}

books.push(new book("Harry Potter", "Hokuspokus", 500, "15123"));
books.push(new book("Our Nature", "Facts", 600, "17558"));
books.push(new book("World Records", "Records", 200, "15788"));

function btnAddBooks(){
    let bookAdd = prompt("How many books?", "Enter a numeric number");
    
    for(let i = 0; i < bookAdd; i++){
        books.push(new book(prompt("Enter book name"), prompt("Enter genre"), prompt("Enter pages"), prompt("Enter ISBN number")));
    }
};

function btnBookInfo(){
    books.forEach(function(e){
        e.getBookInfo();
    });
};
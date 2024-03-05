const libraryBooksData = [
    { title: "Book A", author: "Author X", genre: "Fantasy", pages: 300, publicationYear: 2005 },
    { title: "Book B", author: "Author Y", genre: "Mystery", pages: 250, publicationYear: 2010 },
    { title: "Book C", author: "Author Z", genre: "Science Fiction", pages: 400, publicationYear: 2015 },
    { title: "Book D", author: "Author W", genre: "Romance", pages: 350, publicationYear: 2008 },
    { title: "Book E", author: "Author V", genre: "Science Fiction", pages: 450, publicationYear: 2020 }
  ];
  function mostPages(){
let morePages=libraryBooksData[0]
for(let i=0;i<libraryBooksData.length;i++){
    if(libraryBooksData[i].pages>morePages.pages){
        morePages=libraryBooksData[i]
    }
}return morePages
  }
let heighest=mostPages()
function BooksData(){
let result="title of book:"+heighest.title+"\nAuthor:"+heighest.author+"\nGenre:"+heighest.genre+"\npages:"+heighest.pages
return result
} console.log(BooksData())
function average(){
let total=0
for(let i=0;i<libraryBooksData.length;i++){
    total+=libraryBooksData[i].publicationYear
}return total/libraryBooksData.length
}
console.log(average())
function BooksData(){
for(let i=0;i<libraryBooksData.length;i++){
    if(libraryBooksData[i].genre==="Science Fiction"){
        console.log(libraryBooksData[i])
    }
}
}
BooksData()
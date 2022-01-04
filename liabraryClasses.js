console.log('Welcome to this Liabrary.!');

class Liabrary {
    constructor(bookList) {
        this.books = bookList
        this.allissuedBooks = {}
    }
    getBookList() {
        let inc = 1
        for (let book of this.books) {
            console.log(`${inc}. ${book}.`);
            inc++;
        }
        return 'These are the books right now.'
    }
    getIssuedList() {
        let inc = 1;
        for (let issue in this.allissuedBooks) {
            console.log(`${inc}. ${issue}: ${this.allissuedBooks[issue]}`);
            inc++
        }
        return `${inc-1} person will return book.`
    }
    issueBooksM(bookname, user) {
        if ((this.allissuedBooks).hasOwnProperty(user) && this.books.includes(bookname)){
            this.allissuedBooks[user]=this.allissuedBooks[user].concat([bookname])
            let i = this.books.indexOf(bookname)
            this.books.splice(i, 1)
            return i+1
        }
        else if(this.books.includes(bookname)){
            this.allissuedBooks[user]=[bookname]
            let i2 = this.books.indexOf(bookname)
            this.books.splice(i2, 1)
            return i2 + 1
        }else{
            return false;
        }
    }
    returnBooks(user, bookname) {
        if (this.allissuedBooks.hasOwnProperty(user) && this.allissuedBooks[user].includes(bookname)) {
            let returned = this.allissuedBooks[user].splice(this.allissuedBooks[user].indexOf(bookname), 1)
            this.books.push(returned)
            return 'You returned the book/books';
        }else{
            return 'Either user or the bookname does not exist!'
        }
    }
}


// I am just doing for the practice of INHERITANCE...
class Maintainer extends Liabrary {
    constructor (bookList, newBookList){
        super(bookList)
        this.newBooks = newBookList;
    }
    issueBooks(bookname, user){
        let rv = this.issueBooksM(bookname, user)
        if(rv) {
            let exch = this.newBooks.pop()
            this.books.splice(rv-1, 0, exch)
            return 'Remember to return it soon.'
        }else{
            return 'This book is not available.'
        }
    }

}

let controller = new Liabrary(["Raja our Rani", "Ek our Kahani", "bas our nhi", "The King", "Jungle Book", "The Elelphant", "Panchantratm", "Vikram Betal"])

let liab = new Maintainer(controller.books, ["Harry Potter", "Middle School", "The Return of Rebel", "The Return of Rebel 2", "Bengal Tiger", "Dryshyam", "Dryshyam 2", "KGF", "Bahubali The Begining"])
;


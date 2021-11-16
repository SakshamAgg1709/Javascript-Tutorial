console.log("Welcome to Online Library")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


class Library{
    constructor(givenName, givenBookList){
        this.libraryName = givenName
        this.bookList = givenBookList
        this.issuedBook = {}
    }

    getBookList() {
        this.bookList.forEach(element =>{
            console.log(element)
        })
        return `Thanks for Visiting our ${this.libraryName}`
    }

    issueBook(userName , bookName){
        if(this.issuedBook[bookName] == undefined){
            this.issuedBook[bookName] = userName
            return `${bookName} is issued to ${userName}
Thanks for Visiting our ${this.libraryName}
            `
        }else{
            return `${bookName} is not available
Thanks for Visiting our ${this.libraryName}
            `
        }
    }

    returnBook(bookName){
        if(this.issuedBook[bookName] == undefined){
            return `${bookName} is not avalaible
Thanks for Visiting our ${this.libraryName}
            `
        }else{
            delete this.issuedBook[bookName] // For deleting both key and values
            
            return `Thanks for returning ${bookName}
Thanks for Visiting our ${this.libraryName}`
        }
    }
}

let sakshamLibrary = new Library("SA Library" ,["Ikigai" , "Rich Dad Poor Dad", "Atomic Habits" , "5AM Club" , "How to win Friends and Influence People", "Rework" , "Zero to One", "48 Hour Start Up" , "The Alchemist"] )
console.log(sakshamLibrary)
console.log(sakshamLibrary.getBookList())
console.log(sakshamLibrary.issueBook("Harry" , "Ikigai"))
console.log(sakshamLibrary.issuedBook)
console.log(sakshamLibrary.returnBook("Ikigai"))
console.log(sakshamLibrary.issuedBook)

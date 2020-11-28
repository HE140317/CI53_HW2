class Book {
    id;
    name;
    price;
    publishedDate;
    constructor(id, name, price, publishedDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.publishedDate = publishedDate;
    }

    update(data) {

    }
}

class ComicBook extends Book {
    funny;
    pageNumber;
    constructor(id, name, price, publishedDate, funny, pageNumber) {
        super(id, name, price, publishedDate);
        this.funny = funny;
        this.pageNumber = pageNumber;
    }
}

class TextBook extends Book {
    subject;
    grade;
    constructor(id, name, price, publishedDate, subject, grade) {
        super(id, name, price, publishedDate);
        this.subject = subject;
        this.grade = grade;
    }
}

class ScienceBook extends Book {
    major;
    constructor(id, name, price, publishedDate, major) {
        super(id, name, price, publishedDate);
        this.major = major;
    }
}

class BookShelf {
    name;
    owner;
    dateModified;
    constructor(name, owner, dateModified) {
        this.name = name;
        this.owner = owner;
        this.dateModified = dateModified;
    }

    addBook(book) {

    }

    updateBook(id, data) {

    }

    deleteBook(id) {

    }

    showBooks() {

    }

    findBook(name) {

    }

    //có thể vì chúng đều được kế thừa từ class Book() 
}
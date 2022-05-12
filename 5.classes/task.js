class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.state = 100;
        this.type = null
    }

    fix() {
        if ((this.state > 0) && (this.state < 100)) {
            this.state = this._state * 1.5;
        }
    }

    set state(newState) {
        if (typeof newState === 'number') {
            if (newState < 0) {
                this._state = 0;
            } else if (newState > 100) {
                this._state = 100;
            } else {
                this._state = newState;
            }
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        let newBook = book;
        if (newBook.state > 30) {
            this.books.push(newBook);
        }
    }

    findBookBy(type, value) {
        let foundBook = null;
        this.books.forEach(function (item, idx, books) {
            if (books[idx][type] === value) {
                foundBook = item;
            }
        });
        return foundBook;
    }

    giveBookByName(bookName) {
        let foundBook = null;
        this.books.find(function (item, idx, books) {
            if (item.name === bookName) {
                foundBook = item;
            }
        });
        this.books = this.books.filter((book) => book.name !== bookName)
        return foundBook;
    }

}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {
            algebra: [],
            geometry: [],
        };
    }

    addMark(mark, subjectName) {
        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }
        if (mark > 5 || mark < 0) {
            return ('Ошибка, оценка должна быть числом от 1 до 5');
        } else {
            this.marks[subjectName].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined) {
            return (`Несуществующий предмет ${subjectName}`);
        } else {
            const sum = this.marks[subjectName].reduce((acc, item) => acc + item, 0);
            return (sum / this.marks[subjectName].length);
        }
    }

    getAverage() {
        let count = 0;
        let sum = 0;
        for (let subj in this.marks) {
            const subjSum = this.marks[subj].reduce((acc, item) => acc + item, 0);
            count += this.marks[subj].length;
            sum += subjSum;
        }
        return (sum/count);
    }
}
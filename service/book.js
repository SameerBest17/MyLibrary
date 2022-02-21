const bookDAO = require("../dao/book");

class BookService {
  createBook(bookDto) {
    const { name, author } = bookDto;
    return bookDAO.createBook(name, author);
  }
  getBooks() {
    return bookDAO.getBooks();
  }
  deleteBook(id) {
    return bookDAO.deleteBook(id);
  }
  updateBook(id, bookDto) {
    const { borrowedBy, borrowedDate, returnDate } = bookDto;
    return bookDAO.updateBook(id, borrowedBy, borrowedDate, returnDate);
  }
}

module.exports = new BookService();

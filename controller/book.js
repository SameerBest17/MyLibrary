const BookService = require("../service/book");

class BookController {
  async createBook(req, res) {
    try {
      const id = await BookService.createBook(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getBooks(req, res) {
    try {
      const books = await BookService.getBooks();
      res.status(200).json(books);
    } catch (err) {
      console.error(err);
      return res.status(401).json(err);
    }
  }
  async deleteBook(req, res) {
    try {
      const { bookId } = req.params;
      console.log(bookId);
      const books = await BookService.deleteBook(bookId);
      res.status(200).json(books);
    } catch (err) {
      console.error(err);
      return res.status(401).json(err);
    }
  }
  async updateBook(req, res) {
    try {
      const { bookId } = req.params;
      const books = await BookService.updateBook(bookId, req.body);
      res.status(200).json(books);
    } catch (err) {
      console.error(err);
      return res.status(401).json(err);
    }
  }
}

module.exports = new BookController();

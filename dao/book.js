const db = require("../db/db");
const { getStudentsByEmail } = require("./student");

class BookDAO {
  async createBook(name, author) {
    try {
      const [id] = await db("book")
        .insert({
          name,
          author,
        })
        .returning("id");
      return id;
    } catch (error) {
      return error;
    }
  }
  async getBooks() {
    try {
      const books = await db("book").select();
      return books;
    } catch (error) {
      return error.message;
    }
  }
  async deleteBook(id) {
    try {
      const books = await db("book").where({ id }).del();
      return books;
    } catch (error) {
      return error.message;
    }
  }
  async updateBook(id, borrowedBy, borrowedDate, returnDate) {
    try {
      const student = await getStudentsByEmail(borrowedBy);
      console.log(student, Object.keys(student).length);
      if (Object.keys(student).length !== 0) {
        const book = await db("book").where({ id }).update({
          borrowedBy,
          borrowedDate,
          expectedReturnDate: returnDate,
        });
        return book;
      }
      return null;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = new BookDAO();

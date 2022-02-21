const express = require("express");
const studentController = require("../controller/student");
const bookController = require("../controller/book");

const router = express.Router();
router.post("/student", studentController.createStudent);
router.get("/student", studentController.getStudents);
router.put("/student/:studentId", studentController.updateStudent);
router.delete("/student/:studentId", studentController.deleteStudent);

router.post("/book", bookController.createBook);
router.get("/book", bookController.getBooks);
router.put("/book/:bookId", bookController.updateBook);
router.delete("/book/:bookId", bookController.deleteBook);

module.exports = router;

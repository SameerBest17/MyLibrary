const studentService = require("../service/student");

class StudentController {
  async createStudent(req, res) {
    try {
      const id = await studentService.createStudent(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
  async getStudents(req, res) {
    try {
      const students = await studentService.getStudents();
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
      return res.status(401).json(err);
    }
  }
  async deleteStudent(req, res) {
    try {
      const { studentId } = req.params;
      const students = await studentService.deleteStudent(studentId);
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
      return res.status(400).json(err);
    }
  }
  async updateStudent(req, res) {
    try {
      const { studentId } = req.params;
      const student = await studentService.updateStudent(studentId, req.body);
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      return res.status(400).json(err);
    }
  }
}

module.exports = new StudentController();

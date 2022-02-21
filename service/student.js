const studentDAO = require("../dao/student");

class StudentService {
  createStudent(studentDto) {
    const { firstName, lastName, email } = studentDto;
    return studentDAO.createStudent(firstName, lastName, email);
  }
  getStudents() {
    return studentDAO.getStudents();
  }
  deleteStudent(id) {
    return studentDAO.deleteStudent(id);
  }
  updateStudent(id, studentDto) {
    const { firstName, lastName } = studentDto;
    return studentDAO.updateStudent(id, firstName, lastName);
  }
}

module.exports = new StudentService();

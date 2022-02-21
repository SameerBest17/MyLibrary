const db = require("../db/db");

class StudentDAO {
  async createStudent(firstName, lastName, email) {
    try {
      const [id] = await db("student")
        .insert({
          email,
          first_name: firstName,
          last_name: lastName,
        })
        .returning("id");
      return id;
    } catch (error) {
      if (error.code === "23505") {
        return "Email Alerdy Exists";
      }
      return error;
    }
  }
  async getStudents() {
    try {
      const students = await db("student").select().returning("id");
      return students;
    } catch (error) {
      return error.message;
    }
  }
  async getStudentsByEmail(email) {
    try {
      const students = await db("student").where({ email });
      return students;
    } catch (error) {
      return error.message;
    }
  }
  async deleteStudent(id) {
    try {
      const students = await db("student").where({ id }).del();
      return students;
    } catch (error) {
      return error.message;
    }
  }
  async updateStudent(id, firstName, lastName) {
    try {
      const student = await db("student").where({ id }).update({
        first_name: firstName,
        last_name: lastName,
      });
      return student;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = new StudentDAO();

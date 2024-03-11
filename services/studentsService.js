const Student = require('./models/student');

class StudentService {
    async create(studentData) {
        const createdStudent = await Student.create(studentData);
        return createdStudent;
    }

    async getAll() {
        const students = await Student.find();
        return students;
    }

    async getOne(studentId) {
        const student = await Student.findById(studentId);
        return student;
    }

    async update(studentId, newData) {
        const updatedStudent = await Student.findByIdAndUpdate(studentId, newData, { new: true });
        return updatedStudent;
    }

    async delete(studentId) {
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        return deletedStudent;
    }
}

module.exports = new StudentService();

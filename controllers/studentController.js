const studentService = require('../services/studentsService');

class StudentController {
    async create(req, res, next) {
        try {
            const newStudent = req.body;
            const createdStudent = await studentService.create(newStudent);
            res.status(201).json(createdStudent);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const students = await studentService.getAll();
            res.json(students);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const { studentId } = req.params;
            const student = await studentService.getOne(studentId);
            if (!student) {
                res.status(404).json({ error: 'Student not found' });
                return;
            }
            res.json(student);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { studentId } = req.params;
            const newData = req.body;
            const updatedStudent = await studentService.update(studentId, newData);
            if (!updatedStudent) {
                res.status(404).json({ error: 'Student not found' });
                return;
            }
            res.json(updatedStudent);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { studentId } = req.params;
            const deletedStudent = await studentService.delete(studentId);
            if (!deletedStudent) {
                res.status(404).json({ error: 'Student not found' });
                return;
            }
            res.json(deletedStudent);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new StudentController();

const Homework = require('./models/homework');

class HomeworkService {
    async create(homeworkData) {
        const createdHomework = await Homework.create(homeworkData);
        return createdHomework;
    }

    async getAll(studentId) {
        const query = studentId ? { StudentID: studentId } : {};
        const homeworks = await Homework.find(query);
        return homeworks;
    }

    async getOne(homeworkId) {
        const homework = await Homework.findById(homeworkId);
        return homework;
    }

    async update(homeworkId, newData) {
        const updatedHomework = await Homework.findByIdAndUpdate(homeworkId, newData, { new: true });
        return updatedHomework;
    }

    async delete(homeworkId) {
        const deletedHomework = await Homework.findByIdAndDelete(homeworkId);
        return deletedHomework;
    }
}

module.exports = new HomeworkService();

const homeworkService = require('../services/homeworkService');

class HomeworkController {
    async create(req, res, next) {
        try {
            const newHomework = req.body;
            const createdHomework = await homeworkService.create(newHomework);
            res.status(201).json(createdHomework);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const { studentId } = req.query;
            const homeworks = await homeworkService.getAll(studentId);
            res.json(homeworks);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next) {
        try {
            const { homeworkId } = req.params;
            const homework = await homeworkService.getOne(homeworkId);
            if (!homework) {
                res.status(404).json({ error: 'Homework not found' });
                return;
            }
            res.json(homework);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { homeworkId } = req.params;
            const newData = req.body;
            const updatedHomework = await homeworkService.update(homeworkId, newData);
            if (!updatedHomework) {
                res.status(404).json({ error: 'Homework not found' });
                return;
            }
            res.json(updatedHomework);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const { homeworkId } = req.params;
            const deletedHomework = await homeworkService.delete(homeworkId);
            if (!deletedHomework) {
                res.status(404).json({ error: 'Homework not found' });
                return;
            }
            res.json(deletedHomework);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new HomeworkController();

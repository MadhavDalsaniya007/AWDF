const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./models/Task');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// GET all tasks
app.get('/tasks', async (req, res, next) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

// GET task by id
app.get('/tasks/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(task);
    } catch (err) {
        next(err);
    }
});

// POST create task
app.post('/tasks', async (req, res, next) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            priority: req.body.priority
        });

        res.status(201).json({
            message: 'Task created',
            task
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation failed',
                errors: Object.values(err.errors).map(error => ({
                    field: error.path,
                    message: error.message
                }))
            });
        }

        next(err);
    }
});

// PUT update task
app.put('/tasks/:id', async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
                priority: req.body.priority
            },
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({
            message: 'Task updated',
            task
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                message: 'Validation failed',
                errors: Object.values(err.errors).map(error => ({
                    field: error.path,
                    message: error.message
                }))
            });
        }

        next(err);
    }
});

// DELETE task by id
app.delete('/tasks/:id', async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({
            message: 'Task deleted'
        });
    } catch (err) {
        next(err);
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);

    if (err.name === 'CastError') {
        return res.status(400).json({
            message: 'Invalid task ID format',
            error: err.message
        });
    }

    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

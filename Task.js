const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    }
});

// Pre-save hook to trim whitespace from title field.
taskSchema.pre('save', async function () {
    if (this.title) {
        this.title = this.title.trim();
    }
});

taskSchema.pre('findOneAndUpdate', async function () {
    const update = this.getUpdate();

    if (update && update.title && typeof update.title === 'string') {
        update.title = update.title.trim();
    }
});

module.exports = mongoose.model('Task', taskSchema);

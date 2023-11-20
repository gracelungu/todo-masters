const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,J        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

Todo.Schema.prepareIndex({ title: 1 });

module.exports = mongoose.model('Todo', TodoSchema);
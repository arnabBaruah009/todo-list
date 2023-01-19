const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: false
    }
});

const List = mongoose.model('List', todoSchema);
module.exports = List;
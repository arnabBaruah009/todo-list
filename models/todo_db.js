const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    dueDate: {
        type: String
    },
    dueMonth: {
        type: String
    }
});

const List = mongoose.model('List', todoSchema);
module.exports = List;
const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({

    title: String,
    description: {
        type: String,
        required: true
    },
    author: String,
    date: Date
}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema);
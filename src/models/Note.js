const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({

    title: String,
    description: {
        type: String,
        required: true
    },
    author: String
    
}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema);
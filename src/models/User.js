const { Schema , model } = require('mongoose');

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = model('User', UserSchema);
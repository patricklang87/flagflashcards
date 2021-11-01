const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create our Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
        email: {
        type: String,
        required: true,
        unique:true
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    memorized_flags: {
        type: Array
    },
});

module.exports = User = mongoose.model('user', UserSchema);
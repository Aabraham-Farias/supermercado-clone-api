const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        maxlength: 50,
        require: true,

    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minglength: 5
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const Users = mongoose.model('User', usersSchema);

module.exports = Users;
//it is make for to design the schema to define your application's data model and validate documents whenever they're created, changed, or deleted.
const mongoose = require('mongoose')

const underSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is require"],
    },
    email: {
        type: String,
        required: [true, "email is require"],
    },
    password: {
        type: String,
        required: [true, "password is require"],
    },
    isAdmin: {
        type: Boolean,
        default:false,
    },
    isDoctor: {
        type: Boolean,
        default:false,
    },
    notification: {
        type: Array,
        default:[],
    },
    seennotification: {
        type: Array,
        default:[],
    },
})

const userModel = mongoose.model('user', underSchema)

module.exports = userModel
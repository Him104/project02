const mongoose = require("mongoose")


const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: "This is required for example: iith",
        trim: true,
    },
    fullName: {
        type: String,
        required: "Enter The Full Name of College ",
        trim: true
    },
    logoLink: {
        type: String,
        required: "Do not forget to attach the logo",
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("college", CollegeSchema)
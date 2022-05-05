const mongoose = require("mongoose")
const Email = require("mongoose-type-email")
const ObjectId = mongoose.Schema.Types.ObjectId

const InternSchema = new mongoose.Schema({

    name: {
        type: String,
        required: "name is Mandatory",
        trim: true,
    },
    email: {
        type: Email,
        required: "Email is mandatory",
        unique: true,
        trim: true
    },
    mobile: {
        type: Number,
        required: "Mobile Number is Mandaory",
        unique: true,
    },
    collegeId: {
        type: ObjectId,
        ref: "college",
    },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true })

module.exports = mongoose.model("intern", InternSchema)
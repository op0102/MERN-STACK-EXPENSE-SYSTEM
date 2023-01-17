const mongoose = require("mongoose");

//Schema design 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be required!!"]
    },
    email: {
        type: String,
        required: [true, "email is required and should be unique!!"],
        unique: true
    },
    passward: {
        type: String,
        required: [true, "passward is required!!"]
    }
},
    {
        timestamps: true
    })


//Export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel


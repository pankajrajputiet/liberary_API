const mongoose = require("mongoose")
const Bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Please fill a valid password']
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { collection: "users" })

userSchema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = Bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model("User", userSchema)
const mongoose = require("mongoose")
const bookSchema = new mongoose.Schema({
    auther:String,
    title:String,
    ISBN:String,
},{collection:"books"})

module.exports = mongoose.model("Book",bookSchema)
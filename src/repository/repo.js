const mongoose = require("mongoose")
const User = require("./../model/user");
const Book = require("./../model/book");
mongoose.connect("mongodb://localhost:27017/userDB",()=>{
    console.log("connected")
});
function createUser(user){
    const userData = new User({
        userName:user.userName,
        password:user.password,
        role:user.role
    })
    return userData.save();
}

// update user
async function updateUser(id,body){
   return await User.findByIdAndUpdate(id,body);
    //return userData.save();
}

//findUsers
async function findUsers(){
 return await User.find();
}

// deleteUser
async function deleteUser(id){
  return await User.findByIdAndDelete(id);
    
}

async function addBook(book){
    const bookData = await new Book({
        auther:book.auther,
        title:book.title,
        ISBN:book.ISBN
    });
    return bookData.save();
}

async function updateBook(id,body){
    return await Book.findByIdAndUpdate(id,body);
}

async function findBooks(){
    return await Book.find();
}

async function deleteBook(id){
    return await Book.findByIdAndDelete(id);
}
module.exports = {createUser,updateUser,findUsers,deleteUser,addBook,updateBook,findBooks,deleteBook}

const repo = require("./../repository/repo");

function createUser(user){
return repo.createUser(user);
}
function updateUser(id,body){
    return repo.updateUser(id,body);
}

function findUsers(){
  return repo.findUsers();

}

function deleteUser(id){
    return repo.deleteUser(id)
}

function addBook(book){
  return repo.addBook(book);
}

function updateBook(id,body){
  return repo.updateBook(id,body);
}

function findBooks(){
  return repo.findBooks();
}

function deleteBook(id){
  return repo.deleteBook(id);
}
module.exports=  {createUser,updateUser,findUsers,deleteUser,addBook,updateBook,findBooks,deleteBook}
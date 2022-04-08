const express = require("express")
const service = require("./../service/service")
const router = express.Router();

//createUser
router.post("/users", async (req,res)=>{
    try{
        const user = req.body
        const result = await service.createUser(user);
        res.status(200).send(result)
    }catch(e){
        res.status(500).send(e);
    }
})

// updateUser
router.put("/users/:id", async (req,res)=>{
    try{
        const id = req.params.id; 
            const body = req.body;
        const result =await service.updateUser(id,body)
        res.status(200).send(result)
    }catch(e){
        res.status(400).send(e)
    }
})

//find users
router.get("/users",async (req,res)=>{
    try{
    const result = await service.findUsers();
    res.status(200).send(result)
    }catch(e){
        res.status(400).send(e);
    }
}) 

// deleteUser
router.delete("/users/:id", async (req,res)=>{
    try{
        const id = req.params.id; 
        const result = await service.deleteUser(id)
        res.status(200).send(result)
    }catch(e){
        res.status(400).send(e)
    }
})

//add Book
router.post("/books",async (req,res)=>{
    const book = req.body;
    const result = await service.addBook(book);
    res.status(200).send(result);
}),

//update Book
router.put("/books/:id", async (req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const result = await service.updateBook(id,body);
    res.status(200).send(result)
})

// find Books
router.get("/books", async (req,res)=>{
    const result = await service.findBooks();
    res.send(result);
})

// delete Book
router.delete("/books/:id", async (req,res)=>{
    const id = req.params.id;
    const result = await service.deleteBook(id);
    res.status(200).send(result);
})

module.exports = router;
const express = require("express")
const port = 3000;
const app = express();
const controller = require("./controller/controller");

app.use(express.json());
app.use('/liberary/api/v1/',controller)
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
import express from "express"; 

const app = express()
console.log(app)
app.listen(3000, ()=>{
    console.log("server started"); 
})


const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")


const app=express()

app.use(cors())

app.use(express.json())


app.get("/add-team",(req,res)=>{
    res.send("team added")
})

app.get("/view-team",(req,res)=>{
    res.send("view")
})




app.listen(3000,()=>{
    console.log("server started")
})

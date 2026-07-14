

const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")


const app=express()

app.use(cors())

app.use(express.json())


mongoose.connect("mongodb://sajana:2504@ac-ltz4eec-shard-00-00.pdwztor.mongodb.net:27017,ac-ltz4eec-shard-00-01.pdwztor.mongodb.net:27017,ac-ltz4eec-shard-00-02.pdwztor.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-ptliri-shard-0&authSource=admin&appName=Cluster0").then(
    ()=>{
        console.log("db connected")
    }
).catch(
    (error)=>{
        console.log(error)
    }
)


const Team=mongoose.model("Teams",new mongoose.Schema(
    {
        
        teamId: Number,
        teamName: String,
        teamLeader: String,
        leaderEmail: String,
        leaderPhone: String,
        collegeName: String,
        numberofMembers: Number,
        projectTitle: String,
        problemstatementTrack: String,
        technologyStack: String,
        mentorName: String,
        registrationDate: Date,
        stationNumber: Number,
        
        


    }


    
))


app.post("/add-team",async(req,res)=>{
    await Team.create(req.body)
    res.json({"status":"success"})
    

})

app.post("/view-team",async(req,res)=>{
    const Teams=await Team.find()
    res.json(Teams)
})





app.listen(3000,()=>{
    console.log("server started")
})

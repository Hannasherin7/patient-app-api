const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {patientmodel}=require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://hannasherin:Alazhar4@cluster0.agtcb.mongodb.net/patientDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let patient=new patientmodel(input)
    patient.save()
    console.log(patient)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    patientmodel.find(input).then((data)=>{
        res.json(data)
    }
    ).catch((error)=>{
        res.json(error)
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    patientmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
}) 


app.get("/view",(req,res)=>{
    patientmodel.find().then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.json(error)
    })
})

app.listen(8089,()=>{
    console.log("server started")
})
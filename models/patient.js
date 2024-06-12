const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "name":{type:String,required:true},
    "id":{type:String,required:true},
    "blood":{type:String,required:true},
    "mobno":{type:String,required:true}
})

let patientmodel=mongoose.model("patients",schema);
module.exports={patientmodel}
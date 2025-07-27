const mongoose= require("mongoose");

const toDoSchema=new mongoose.Schema({
    task:{
        type:String,
        required: false,
    },
    status:{type: Boolean,default:false},
   
});

const todo=mongoose.model("todo",toDoSchema);
module.exports=todo;
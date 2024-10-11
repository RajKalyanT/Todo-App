const mongoose = require('mongoose')

const schema=new mongoose.Schema({
    task:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const model=mongoose.model("todos",schema)
module.exports=model
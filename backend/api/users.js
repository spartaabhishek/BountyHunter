const mongoose=require('mongoose')
const Schema = mongoose.Schema
const userSchema = mongoose.Schema({

    id:{
        type: Schema.Types.ObjectId
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    
})

const Users = mongoose.model('users',userSchema)
module.exports=Users
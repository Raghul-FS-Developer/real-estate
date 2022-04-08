var mongoose = require('mongoose')
var validator = require("validator")
const {Schema} = mongoose

var users = new Schema({
    name:String,
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    password:{
      type:String
    },
    ValidityStatus:{
     type:String,
     default:'inActive'
    }    
    
},{
       versionKey :false
   
})

module.exports = mongoose.model("users",users);

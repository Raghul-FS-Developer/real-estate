var mongoose =require('mongoose');
let {Schema} = mongoose;


const sell =new Schema({
    categories:String,
    rooms:String,
    price:String,
    number:String,
    image:String,
    location:String,
    type:String
},{
    versionKey :false

})


module.exports = mongoose.model('sell',sell);


const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CustomerShcema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    create_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("customer",CustomerShcema);
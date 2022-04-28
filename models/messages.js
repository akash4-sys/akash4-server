const mongoose = require('mongoose');

const msgSchema = mongoose.Schema({

    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    message:String,
    SentAt:{
        type:Date,
        default:Date.now()
    }

});

const Message = mongoose.model('Message', msgSchema);
module.exports = Message;
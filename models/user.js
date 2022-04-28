const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name:String,
    email:String,
    firstContacted:{
        type:Date,
        default:Date.now(),
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
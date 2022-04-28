const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Message = require('../models/messages');

router.post('/clientdetails', async(req, res)=>{

    try{
        let {name, email, message} = req.body;

        let user, done;
        const _user = await User.findOne({email}).lean();
        if ( !_user || _user?.name !== name ){

            user = await User.create({name, email});
            done = await Message.create({name: user._id, message });

        }else{
            done = await Message.create({name: _user._id, message });
        }
        
        if(done){
            res.json({success:true});
        }else{
            setTimeout(() => {
                res.json({success:false});
            }, 20000);
        }

    }catch(err) {
        res.status(500).json({Error:"Internal server error, Sorry for inconvenience",  success:false});
    }
});

module.exports = router;
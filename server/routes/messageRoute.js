var Message = require('../models/Message');
var bodyparser = require('body-parser');

module.exports = function(router){
    router.use(bodyparser.urlencoded({ extended: true }))
    router.use(bodyparser.json());

    // query db for all messages

    router.get('/messages', function(req, res){
        Message.find({}, {id: 1, friendID:1, text: 1, user:1, time :1, _id:0 }, function(err,data){
            if(err){
                console.log(err);
                return res.status(500).json({msg:'internal server error'});
            }
            res.json(data);
        });
    });


    //query db for message for a particular friend
    router.get('/messages/:friend', function(req, res){
        Message.find({friendID: req.params.friend}, { id:1, friendID:1, text:1, user:1 , time:1 , _id:0 }, function(err, data){
            if(err){
                console.log(err);
                return res.status(500).json({msg: 'internal server error'}); 
            }
            res.json(data);
        });
    });

    //save a new message to db

    router.post('/newmessage', function(req, res){
        var newMessage = new Message(req.body);
        newMessage.save(function(err, data){
            if(err){
                console.log(err);
                return res.status(500).json({msg: 'internal server error'});
            }
            res.json(data);
        })

    })
}

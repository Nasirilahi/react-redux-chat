var Friend = require('../models/Friend');
var bodyparser = require('body-parser');


module.exports = function(router){
    router.use(bodyparser.urlencoded({ extended: true }));
    router.use(bodyparser.json());

    router.get('/friends', function(req, res){
        Friend.find({}, {name:1, id:1, _id:0}, function(err,data){
            if(err){
                console.log(err);
                return res.status(500).json({msg: 'internal server error'})
            }
            res.json(data);
        });
    });

    router.get('/friends/:name', function(req, res){
        Friend.find( {$or:[{between: req.params.name}, {private: false}]}, {name:1, id:1, private:1, between: 1, _id:0}, function(err, data){
            if(err){
                console.log(err);
                return  res.status(500).json({msg: 'internal server error'});
            }
            res.json(data);
        });
    });
}
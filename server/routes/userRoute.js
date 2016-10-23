'user strict';

var bodyparser = require('body-parser');
var User = require('../models/User.js');

module.exports = function(router){
    router.use(bodyparser.urlencoded({ extended: true }));
    router.use(bodyparser.json());

    router.post('/user', function(req, res){
        console.log('request came from client', req.body.username);

       User.findOne({'username':req.body.username},function(err, user){
           if(err){
               return  res.status(500).json({msg:'internal server error'});
            }
           if(user){
               console.log('user exist',user);
                res.send(user);
           }
           else{
               var newUser = new User();
               newUser.username = req.body.username;
               newUser.save(function(err, user){
                   if(err){
                       throw err;
                   }
                   console.log('successful',user);
                   res.send(user);
               });
           }
       });
    });


// get usernames for validating whether a username is available
  router.get('/allusernames', function(req, res) {
    User.find({'username': { $exists: true } }, {'username': 1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  })
}
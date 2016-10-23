'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username:{ type:String, unique:true },
    id: String
});

module.exports = mongoose.model('User', userSchema);

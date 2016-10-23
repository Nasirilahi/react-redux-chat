'use strict';

var mongoose = require('mongoose');


var friendSchema = mongoose.Schema({
    name : { type:String, unique: true },
    id: String,
    private: Boolean,
    between: Array
});

module.exports = mongoose.model('Friend', friendSchema);
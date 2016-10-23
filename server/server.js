'use strict';

// require('babel-core/register');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var SocketIo = require('socket.io');

const app = express();

//set env vars
const MONGO_URI = 'mongodb://localhost:27017/db';
const PORT = 3000;

// connect our DB
mongoose.connect(MONGO_URI);

app.use(cors());

//load routes
const messageRouter = express.Router();
const usersRouter = express.Router();
const friendsRouter = express.Router();

require('./routes/messageRoute')(messageRouter);
require('./routes/friendsRoute')(friendsRouter);
require('./routes/userRoute')(usersRouter);

app.use('/',messageRouter);
app.use('/',usersRouter);
app.use('/',friendsRouter);

 
// app.use('/',express.static(path.join(__dirname,'..','static')));
var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});


const io = new SocketIo(server, {path:'api/chat'})
const socketEvents = require('./socketEvents')(io);

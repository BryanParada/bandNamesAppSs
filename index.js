const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

//Node server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//mensajes de sockets
io.on('connection', client => { 
    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected');
        
     });
  }); 


//path publico
const publicPath = path.resolve( __dirname, 'public' );

app.use( express.static(publicPath) )

server.listen(process.env.PORT, (err) =>{

    if ( err ) throw new Error(err);

    console.log(`Server running on port`, process.env.PORT);

});
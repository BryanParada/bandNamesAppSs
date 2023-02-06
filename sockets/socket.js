const {io} = require('../index');

//mensajes de sockets
io.on('connection', client => { 
    console.log('Client connected');

    client.on('disconnect', () => {
        console.log('Client disconnected');   
     });

     client.on('mensaje', ( payload) =>{
        console.log('mensaje!!!', payload);

        io.emit( 'mensaje', { admin: 'New message from admin from server'});
     });



  }); 
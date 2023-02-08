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

     client.on('emitir-mensaje', (payload) =>{
      //console.log(payload);
      
      // io.emit('nuevo-mensaje', payload); //*EMITE A TODOS
       client.broadcast.emit('nuevo-mensaje', payload); //* EMITE A TODOS MENOS EL QUE LO EMITIO
     })



  }); 
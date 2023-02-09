const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band( 'Queen') );
bands.addBand(new Band( 'Bon Jovi') );
bands.addBand(new Band( 'Mermen') );
bands.addBand(new Band( 'Daikaiju') );

// console.log(bands)

//mensajes de sockets
io.on('connection', client => { 
    console.log('Client connected');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Client disconnected');   
     });

     client.on('mensaje', ( payload) =>{
        console.log('mensaje!!!', payload);

        io.emit( 'mensaje', { admin: 'New message from admin from server'});
     });

   //   client.on('emitir-mensaje', (payload) =>{
   //    //console.log(payload);
      
   //    // io.emit('nuevo-mensaje', payload); //*EMITE A TODOS
   //     client.broadcast.emit('nuevo-mensaje', payload); //* EMITE A TODOS MENOS EL QUE LO EMITIO
   //   })

     client.on('vote-band', (payload) =>{

      // console.log(payload);
      bands.voteBand( payload.id );
      //recibir todos los cambios "IO" es el servidor
      io.emit('active-bands', bands.getBands());
      

     });

     //Escuchar: add-band
     client.on('add-band', (payload) =>{ 
      const newBand = new Band( payload.name);
      bands.addBand( newBand);
      io.emit('active-bands', bands.getBands());
      

     });



  }); 
const express = require('express');
const app = express();
const path = require('path');


//path publico
const publicPath = path.resolve( __dirname, 'public' );

app.use( express.static(publicPath) )

app.listen(3000, (err) =>{

    if ( err ) throw new Error(err);

    console.log(`Server running on port`, 3000);

});
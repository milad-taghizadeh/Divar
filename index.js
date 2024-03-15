// express package import
const express = require('express');
const app = express();

// Server config
require('./src/config/serverConfig')(app)

// DataBase config
require('./src/config/mongooseConfig')


// starting server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port:${process.env.PORT}`);
    console.log(`You can access to server on this address ==> http://localhost:${process.env.PORT}`);
}).on('error', (err) => {
    console.log(err);
    console.log('Backend server is NOT STARTED !!!');
});
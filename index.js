// express package import
const express = require('express');
const app = express();

// Server config
require('./src/config/serverConfig')(app)

// DataBase config
require('./src/config/mongooseConfig')


// starting server
app.listen(process.env.PORT, () => {
    console.log("===== "+`${process.env.PROJ_NAME}`+ " Ver: "+ `${process.env.PROJ_VER}`+" =====");
    console.log(`Server is running on Port:${process.env.PORT}`);
    console.log(`API documentation ==> http://localhost:${process.env.PORT}/api-doc`);
}).on('error', (err) => {
    console.log(err);
    console.log('Backend server is NOT STARTED !!!');
});
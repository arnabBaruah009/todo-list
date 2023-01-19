//require the library
const mongoose = require('mongoose');

//connect to the library
mongoose.connect('mongodb://localhose/to_do_list_db');

//acquire the connection (to check if it is successfull)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the database'));

//up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to the databse');
});
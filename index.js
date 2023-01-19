const express = require('express');
const port = 8000;

//database
const dp = require('./config/mongoose');
const List = require('./models/todo_db');

const app = express();

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//parser function
app.use(express.urlencoded());

//accessing static files
app.use(express.static('assets'));

//routes and controllers
app.get('/', function(req, res){
    List.find({}, function(err, listItem){
        if (err){
            console.log('Error in finding tasks');
            return;
        }
        return res.render('home', {
            title: 'TO-DO',
            task_list: listItem
        });
    })
})

app.post('/create-task', function(req, res){
    console.log(req.body);
})


app.listen(port, function(err){
    if(err){
        console.log("Error in running server");
        return;
    }

    console.log(`Server is running on port: ${port}`);
})

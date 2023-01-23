const express = require('express');
const port = 8000;

// set up database
const db = require('./config/mongoose');
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
app.get('/arnabbaruah009.github.io/todo-list/', function(req, res){
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
    var dt = new Date(req.body.date);
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    List.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: dt.getDate(),
        dueMonth: month[dt.getMonth()]
    }, function(err, newTask){
        if (err){
            console.log('Error creating the task');
            return res.redirect('back');
        }
        res.redirect('back');
    })
})

app.get('/delete-task', function(req, res){
    let id = req.query.id;
    List.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting the task");
            return;
        }
        return res.redirect('back');
    })
})


app.listen(port, function(err){
    if(err){
        console.log("Error in running server");
        return;
    }

    console.log(`Server is running on port: ${port}`);
})

/**
 * Created by manbir on 5/17/2017.
 */
var express = require('express');
var app = express();


app.get('/hello', handleRootRequest);
app.get('/todo/:name', createTodo);

  var todos = [];
function createTodo(req, res) {
    var name = req.params['name'];
    var todo = {
        name:name
    };

    todos.push(todo); //pushes object to the array
    res.send(todos);
}


app.use(express.static(__dirname + '/public'));
function handleRootRequest(req, res){
    res.send('hello world');
}

app.listen(3000);
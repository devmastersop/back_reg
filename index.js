const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//import files
const queries = require('./queries');
const global = require('./global');
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)


app.get(global.URL_BASE + "teachers", queries.getUsers);

app.get(global.URL_BASE + "teachers/:id", queries.getById);


app.put(global.URL_BASE + "teacher/:id", queries.getById);

app.listen(port, function(){
    console.log('Api listen on port 3000!');
})




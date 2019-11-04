const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3050;

//import files
const queries = require('./controllers/user_controller');
const global = require('./global');



app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)


app.get(global.URL_BASE + "teachers", queries.getUsers);

app.get(global.URL_BASE + "teachers/:id", queries.getById);


app.put(global.URL_BASE + "teachers/:id", queries.putHrs);

app.listen(port, function(){
    console.log('Api listen on port 3050!');
})




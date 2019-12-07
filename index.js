const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3050;

//import files
const teacher_controller = require('./controllers/teacher_controller');
const auth_controller = require('./controllers/auth_controller');
const global = require('./global');
const test = require('./test');


app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.use(
    bodyParser.urlencoded({
        extended:true
    })
)


app.get(global.URL_BASE + "teachers", teacher_controller.getTeachers);

app.get(global.URL_BASE + "teachers/:id", teacher_controller.getById);

app.get(global.URL_BASE + "teacher/:per1&:per2", teacher_controller.getBetween);

app.get(global.URL_BASE + 'teachers/:id/pdf', test.getPdf);

app.put(global.URL_BASE + "teachers/:id", teacher_controller.putHrs);

app.post(global.URL_BASE + "login", auth_controller.postLogin);

app.post(global.URL_BASE + "singup", auth_controller.postSingUp);

app.listen(port, function(){
    console.log('Api listen on port 3050!');
})




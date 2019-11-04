const {Client} = require ('pg');

//connect to database PostgresSQL
const connectionDB = {
    user : 'postgres',
    host : '127.0.0.1',
    database : 'regiterPayroll',
    password : 'vegeta497',
    port : 5433,
}

//creatting a client through a constructor
const client = new Client(connectionDB);

//List of the queries
var qGetUsers = 'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram';
var qGetById = 'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1';
var qPutHrs = 'UPDATE profesor_curso SET cant_hrs =$1 , pago_total= $2 WHERE teacher_dni = $3';
//export the client
module.exports = {
    client,
    qGetUsers,
    qGetById,
    qPutHrs
}
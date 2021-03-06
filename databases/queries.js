const {Client} = require ('pg');

//connect to database PostgresSQL
const connectionDB = {
    user : 'modulo4',
    host : '67.205.143.180',
    database : 'tcs2',
    password : 'modulo4',
    port : 5432,
}

//creatting a client through a constructor
const client = new Client(connectionDB);

//List of the queries
const qGetTeachers = 'select c.nom_curso, pro.nom_programa, p.persona_apaterno, p.persona_amaterno, p.persona_nombres, p.persona_dni, d.per_academico, pl.t_horas, pl.t_unidad, pl.importe from persona p INNER JOIN docente d ON d.nro_document=p.persona_dni inner join planilla pl on p.persona_id = pl.persona_id ' + 
'   inner join curso c on c.id_curso = pl.id_curso inner join programa pro on c.id_programa = pro.id_programa';
//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram';
const qGetByName = 'select p.persona_id, p.persona_dni, c.nom_curso, pro.nom_programa, p.persona_apaterno, p.persona_amaterno, p.persona_nombres, p.persona_dni, d.per_academico, pl.t_horas, pl.t_unidad, pl.importe from persona p INNER JOIN docente d ON d.nro_document=p.persona_dni inner join planilla pl on p.persona_id = pl.persona_id  ' +
'  inner join curso c on c.id_curso = pl.id_curso inner join programa pro on c.id_programa = pro.id_programa WHERE p.persona_apaterno=$1 ';
//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1';
const qGetById = 'select p.persona_id, c.nom_curso, pro.nom_programa, p.persona_apaterno, p.persona_amaterno, p.persona_nombres, p.persona_dni, d.per_academico, pl.t_horas, pl.t_unidad, pl.importe from persona p INNER JOIN docente d ON d.nro_document=p.persona_dni inner join planilla pl on p.persona_id = pl.persona_id  inner join curso c on c.id_curso = pl.id_curso inner join programa pro on c.id_programa = pro.id_programa' + 
 ' WHERE p.persona_dni=$1 ';//'SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1';
const qPutHrs = 'UPDATE planilla SET t_horas= $1, t_unidad= $2, importe=$3 WHERE persona_id=$4';
const qLogin = 'SELECT * FROM usuarios WHERE username= $1 AND password = crypt($2, password)';
const qLoggedOn = 'UPDATE usuarios SET logged = true WHERE username= $1';
const qLoggedOff = 'UPDATE usuarios SET logged = false WHERE username= $1';
const qGetbetween = 'SELECT * FROM docente WHERE per_academico BETWEEN $1 AND $2';
const qSingUp = 'INSERT INTO usuarios ( username, password, email, numberphone) VALUES ($1, CRYPT( $2 ,gen_salt($5)),$3, $4 )';
//export the client
module.exports = {
    client,
    qGetTeachers,
    qGetById,
    qGetByName,
    qPutHrs,
    qLogin,
    qLoggedOn,
    qGetbetween,
    qLoggedOff,
    qSingUp
}
const {Client} = require ('pg');


const connectionDB = {
    user : 'postgres',
    host : '127.0.0.1',
    database : 'regiterPayroll',
    password : 'vegeta497',
    port : 5433,
}

const client = new Client(connectionDB);

client.connect();
// client.query('SELECT t.name_curso, c.name FROM curso t, program c WHERE t.program_idprogram = c.idprogram')
//     .then(response => {
//         //console.log(response.rows);
//         var obj = Object.values(response.rows);
//         console.log(obj);
//         // for(i=0; i<obj.length; i++){
//         //     console.log(obj.values);
//         // }
//         console.log(obj.length);
//         client.end()
//     })
//     .catch (err => {
//         client.end();
//     })


const getUsers = (req, res) => {
    client.query('SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram', (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

function getById(req, res){
    const id = parseInt(req.params.id);
    client.query('SELECT  p.name_program, c.name_curso, t.name_teacher , t.ruc , tc.cant_hrs, c.cant_alumno, c.precio_hra, tc.pago_total FROM profesor_curso tc inner join teacher t on t.dni = tc.teacher_dni inner join curso c on c.idcurso=tc.curso_idcurso inner join program p on p.idprogram = c.program_idprogram WHERE dni = $1', [id], function(err, body){
        if ( err){
            throw err;
        }
        res.status(200).json(body.rows);
    })
}


function putHrs( req, res){
    const id = parseInt(req.params.id);
    const cant_hrs = parseInt(req.body.cant_hrs);
    const precio_hra    = parseInt(req.body.precio_hra);
    var pago_total = precio_hra * cant_hrs;
    console.log(cant_hrs);
    console.log(precio_hra);
    console.log(pago_total);
    console.log(id);
    client.query('UPDATE profesor_curso SET cant_hrs =$1 , pago_total= $2 WHERE teacher_dni = $3', [cant_hrs, pago_total, id], function(err, response){
        if(err){
            throw err;
        }
        res.status(200).send('teacher updated successfully!');
        console.log(response);
    })
    
}
module.exports = {
    getUsers,
    getById,
    putHrs
}
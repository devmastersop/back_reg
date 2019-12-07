const db = require('./databases/queries');
const pdf = require('./controllers/getPdf')

function getPdf(req, res){
    
    const id = req.params.id;
    console.log(id)
    var teacher = []
    var name
    var program
    var curso
    var dni
    var hrs
    var importe
    db.client.query(db.qGetById, [id], function(err, body){
        if(err){
            throw err;
        }
        res.status(200);
        //console.log(body.rows)}
        const json_data = {"2013-01-21":1,"2013-01-22":7};
        teacher = body.rows[0]
        console.log(teacher)
        name = teacher.persona_nombres
        dni = teacher.persona_dni
        program = teacher.nom_programa
        curso = teacher.nom_curso
        console.log("id persona " +teacher.persona_id);
        console.log("dni" +teacher.persona_dni)
        pdf.getpdf(name, dni, program, curso, teacher.per_academico, teacher.t_horas, teacher.importe)
        //console.log(Object.entries(body.rows));
        console.log(__dirname + 'template.pdf');
        var file = __dirname + '/output.pdf';
        res.download(file); 

    })
    
    
}

module.exports = {
    getPdf
}
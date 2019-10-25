const {Client} = require('pg');

const connectionDB = {
    user : 'postgres',
    host : '127.0.0.1',
    database : 'regiterPayroll',
    password : 'vegeta497',
    port : 5433,
}

const client = new Client(connectionDB);

client.connect();
client.query('SELECT t.name_curso, c.name FROM curso t, program c WHERE t.program_idprogram = c.idprogram')
    .then(response => {
        //console.log(response.rows);
        var obj = Object.values(response.rows);
        console.log(obj);
        // for(i=0; i<obj.length; i++){
        //     console.log(obj.values);
        // }
        console.log(obj.length);
        client.end()
    })
    .catch (err => {
        client.end();
    })
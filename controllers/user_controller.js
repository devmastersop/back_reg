const db = require('../databases/queries');

//connecton with tha database
db.client.connect();

const getUsers = (req, res) => {
    db.client.query(db.qGetUsers, (err, results)=>{
        if(err){
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

function getById(req, res){
    const id = parseInt(req.params.id);
    db.client.query(db.qGetById, [id], function(err, body){
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
    db.client.query(qPutHrs, [cant_hrs, pago_total, id], function(err, response){
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
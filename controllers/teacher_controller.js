const db = require('../databases/queries');

//connecton with tha database
db.client.connect();

const getTeachers = (req, res) => {
    const query = req.query;
    if(query.name !=undefined){
        console.log("query exist");
        const name = query.name.toUpperCase() + " ";
        console.log(name+"mm");
        db.client.query(db.qGetByName, [name], (err, results)=>{
            if(err){
                throw err;
            }
            res.status(200).json(results.rows);
        })
    }else{
        console.log("query not exist");
        db.client.query(db.qGetTeachers, (err, results)=>{
            if(err){
                throw err;
            }
            res.status(200).json(results.rows);
            console.log(results.rows.length);
        })
    }
    
}

function getBetween(req, res){
    const per1 = req.params.per1;
    console.log(per1);
    const per2 = req.params.per2;
    console.log(per2);
    db.client.query(db.qGetbetween, [per1, per2], function(err, body){
        if(err){
            throw err;
        }
        res.status(200).json(body.rows);
        console.log(body.rows.length);
    })
}

function getById(req, res){
    const id = req.params.id;
    db.client.query(db.qGetById, [id], function(err, body){
        if(err){
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
    db.client.query(db.qPutHrs, [cant_hrs, pago_total, id], function(err, response){
        if(err){
            throw err;
        }
        res.status(200).send('teacher updated successfully!');
        //console.log(response);
    })
    
}
module.exports = {
    getTeachers,
    getById,
    getBetween,
    putHrs
}
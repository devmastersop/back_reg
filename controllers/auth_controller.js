const db = require ('../databases/queries');
//db.client.connect();
function postLogin (req, res){
    var username = req.body.username;
    var pass = req.body.password;
    db.client.query(db.qLogin , [username, pass], function(err, body){
        if(err){
            response = {"msg": "Error en el logueo"}
        }else{
            if(body.rows.length == 1){
                db.client.query(db.qLoggedOn, [username],function(e, b){
                    if(e){
                        throw e
                    }
                })
                response ={"msg":"Logueo existoso"}
            }else{
                response = {"msg": "No se encontró al usuario"}
            }
        }
        res.send(response);
        //res.json(body.rows);
    })
}

function postLogout (req, res){
    var username = req.body.username;
    var pass = req.body.password;
    db.client.query(db.qLogin , [username, pass], function(err, body){
        if(err){
            response = {"msg": "Error en el loguout"}
        }else{
            if(body.rows.length == 1){
                db.client.query(db.qLoggedOff, [username],function(e, b){
                    if(e){
                        throw e
                    }
                })
                response ={"msg":"Logout existoso"}
            }else{
                response = {"msg": "No se encontró al usuario"}
            }
        }
        res.send(response);
        //res.json(body.rows);
    })
}

function postSingUp(req, res){
    const {username, password, email, phone} = req.body;
    const md5 = 'md5';
    db.client.query(db.qSingUp, [username, password, email, phone, md5], function(err, body){
        if(err){
            throw err
            //response = {"msg":"Error al crear Cuenta"}
        }else{
            response = {"msg": "Cuenta creada"}
        }
        res.send(response);
    })
}

module.exports = {
    postLogin,
    postLogout,
    postSingUp
}
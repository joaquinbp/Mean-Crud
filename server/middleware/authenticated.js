const jwt = require('jwt-simple');
const moment = require('moment');

var secret = 'clave_secreta_app';

const authenticate = {};

authenticate.ensureAuth = (req,res,next) => {
    if(!req.headers.authorization){
        res.status(403).send({message:'Request without headers authoritation.'})
    } else{
        var token = req.headers.authorization.replace(/['"]+/g,'');
        try{
            var payload = jwt.decode(token, secret);
            if(payload.exp <= moment().unix()){
                res.status(401).send({message: 'Token expired'});
            }
        } catch (err){
            res.status(404).send({message: 'Token not valid'});
        }
        req.user = payload;
        next();
    }
}

module.exports = authenticate;
const jwt = require('jsonwebtoken');

const getUserData =(req, res, next) =>{
    const token = JSON.parse(req?.header('auth-token'));
    if(!token){
        //401 : Access denied
        return res.status(401).send({description : "Invalid Token"})
    }

    //verifying the token 
    try{
        const data = jwt.verify(token, "C");
        req.id = data;
        next();
    } catch(error) {
        return res.status(500).send({description :error});
    }
 
   
};

module.exports = getUserData;
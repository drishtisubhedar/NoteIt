const jwt = require("jsonwebtoken")

function authenticator(req,res,next){
    const token = req.header.authorization
    jwt.verify(token,"token",(err,decode)=>{
        if(err) return res.send({
            message: "Token is not valid, please login",
            status:2
        })
        if(decode){
            req.body.user = decode.userId
            next()
        }else{
            res.send({
                message: "Token is not valid, please login",
                status:2
            })
        }
    })
}

module.exports = {
    authenticator,
}
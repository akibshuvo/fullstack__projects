const secureApi = (req, res, next)=>{
    console.log(process.env.SECUREAPIDOT)

    if(req.headers.authorization == process.env.SECUREAPIDOT){
        next()
    }else{
        res.send({error: "not match your passord"})
    }
}

module.exports = secureApi
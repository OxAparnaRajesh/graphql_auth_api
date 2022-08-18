const jwt = require('jsonwebtoken');

const authenticate = async(req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1] || ""
    console.log(token);

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.verifiedUser = verified;
        console.log("Verification Success!",verified);
        next();
    }
    catch(err){
        console.log("Verification failed!!",err);
        next();
    }
}

module.exports = {authenticate};
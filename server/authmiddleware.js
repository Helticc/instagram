const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader.split(" ")[1];
    if(!token) res.json({message: "no token in header"})

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if(decodedToken) {
        next();
    }else {
        res.send({message: "invalid token"});
    };
};

module.exports = authMiddleware;
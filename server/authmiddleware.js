const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if(!authHeader) res.json({message: "no token in header"});
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if(decodedToken) {
        next();
    }else {
        res.send({message: "invalid token"});
    };
};

module.exports = authMiddleware;
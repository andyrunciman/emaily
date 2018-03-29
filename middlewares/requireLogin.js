module.exports = (req, res, next) => {
    if (!req.user) {
        //no need to call next as we want to crash out now!
        return res.status(401).send({ error: 'You must login' });
    }
    next();
};
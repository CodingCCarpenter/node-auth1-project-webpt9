const restricted = (req, res, next) => {
    if (!req.session || !req.session.user) {
        res.status(401).json({ message: "Restricted Section" });
    } else {
        next();
    }
}

module.exports = { restricted };
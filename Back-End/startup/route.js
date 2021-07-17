const Admin = require('../routes/admin');
const config = require('config');
module.exports = function (app) {
    app.use(function (req, res, next) {
        let allowedOrigin = [
            "http://" + config.get("FrontEndUrl"),
            "https://" + config.get("FrontEndUrl"),
        ]
        let origin = req.headers.origin;
        if (allowedOrigin.includes(origin)) {
            res.header('Access-Control-Allow-Origin', origin);
        }
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Key, x-auth-token, multipart/form-data"
          );
          res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, GET, DELETE, OPTIONS"
          );
          next();
    });
    app.use("/api/admin",Admin);
}
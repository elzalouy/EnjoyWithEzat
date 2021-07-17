const winston = require("winston");
//handler middlware -> to handle routes handlers
module.exports = function (handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (err) {
      winston.error(err.message, err);
      res.status(500).send(err.message);
    }
  };
};

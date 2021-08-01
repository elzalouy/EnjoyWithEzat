const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

/**
 * Connec To DB server with a fixed Deprecated warning.
 *
 *
 * 1- DeprecationWarning: current Server Discovery and Monitoring engine is
 * deprecated, and will be removed in a future version. To use the new Server
 * Discover and Monitoring engine, pass option { useUnifiedTopology: true } to
 * the MongoClient constructor.
 *
 *
 * 2- DeprecationWarning: current URL string parser is deprecated, and will be
 * removed in a future version. To use the new parser, pass option
 * { useNewUrlParser: true } to MongoClient.connect.
 * 3- DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()`
 * without the `useFindAndModify` option set to false are deprecated.
 *
 *
 * 4- DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
 *
 * See: https://mongoosejs.com/docs/deprecations.html#findandmodify
 */
module.exports = function() {
    const con = config.get("connectionString");
    mongoose
        .connect(con, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(winston.info(`connected to db server ${con}`))
        .catch((ex) => {
            winston.error(ex.message, ex);
        });
};
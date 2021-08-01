const winston = require("winston");
const config = require("config");
/**
 * Logging (Startup)
 * 
 * 
 * Startup application needs Logging every error occured, 
 * 
 * info for executed operations, 
 * 
 * and warning comments if there are any issue.
 */
module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.File({ filename: "logfile.log" })
    );
    winston.add(
        new winston.transports.File({
            filename: "logfile.log",
            handleExceptions: true
        })
    );
};
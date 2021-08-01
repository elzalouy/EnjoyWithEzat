const express = require("express");
const cors = require("cors");
const winston = require("winston");
const morgan = require("morgan");
const config = require("config");
const app = express();

// urlencoded()=> it parses incoming requests with urlencoded payloads and is based on Body-Parser
/*This option allows to choose between parsing the URL-encoded data with the querystring library (when false) 
or the qs library (when true). The “extended” syntax allows for rich objects and arrays 
to be encoded into the URL-encoded format,allowing for a JSON-like experience with URL-encoded*/
const fronetEndApp = config.get('FrontEndUrl');
app.use(cors({ origin: fronetEndApp }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
require('./startup/logging')();
require('./startup/db')();
require('./startup/route')(app);
require('./startup/prod')(app);
const port = process.env.PORT || 3000;

// Enabling the server to listen to a port.
const server = app.listen(port, () => {
    try {
        console.log(config.get("name"));
        console.log(`listenin to port ${port}`);
    } catch (ex) {
        console.log(ex.message);
        winston.error(ex.message, ex);
    }
});
module.exports = server;
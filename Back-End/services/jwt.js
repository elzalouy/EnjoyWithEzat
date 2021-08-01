const jwt = require("jsonwebtoken");
const config = require("config");

/** Create Access Token
 * 
 * 
 * A document 'Admin' schema is returned with this function to create an acess token
 * where the admin is being logging.
 */
const generateJWT = function(data) {
    if (data && data._id) {
        const token = jwt.sign(data, config.get("API_KEY"), {
            expiresIn: "24h",
        });
        return token;
    } else return new Error('Access token must have at _id');
};
module.exports = { generateJWT }
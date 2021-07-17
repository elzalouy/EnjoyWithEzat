const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const config=require('config');
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, maxlength: 128, minlength: 2 },
    mail: { type: String, required: true, minlength: 8, maxlength: 128, unique: true },
    password: { type: String, required: true, minlength: 6, maxlength: 128 },
    gender: { type: String, required: true, minlength: 3, maxlength: 6 },
    role: { type: String, required: true }
})
/** Create Access Token
 * A document 'Admin' schema is returned with this function to create an acess token 
 * where the admin is being logging. 
 */
AdminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id,name:this.name},config.get('PK'),{expiresIn:'24h'});
    return token;
}
const Admin=mongoose.model('admin',AdminSchema);
module.exports=Admin;

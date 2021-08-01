const mongoose = require("mongoose");
const joi = require("joi");
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, maxlength: 128, minlength: 2 },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 128,
        unique: true,
    },
    password: { type: String, required: true, minlength: 6, maxlength: 128 },
    gender: { type: String, required: true, minlength: 3, maxlength: 6 },
    role: { type: String, required: true },
    super: { type: Boolean, required: true },
});
/**
 * Validate Admin document
 */
AdminSchema.methods.AdminValidation = () => {};
const Admin = mongoose.model("admin", AdminSchema);
module.exports = { admins: Admin };
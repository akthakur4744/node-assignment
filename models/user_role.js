const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    role:{
        type:String,
        required:true,
        unique:true
    }

},{timestamps:true});

var UserRole = mongoose.model('UserRole',userRoleSchema);

module.exports = UserRole;

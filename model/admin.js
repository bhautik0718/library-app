const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminschema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:String

});
const admin = mongoose.model('admin',adminschema );

module.exports =admin;
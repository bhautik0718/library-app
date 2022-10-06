

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorschema = new Schema({
   name:{
    type:String,
    unique:true,
   }
});
const author = mongoose.model('author',authorschema );

module.exports =author;
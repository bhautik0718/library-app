

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookschema = new Schema({

    bookname:String,
    ISBN:{
        type:String,
        unique:true,
    },
    authorid:{ type: Schema.Types.ObjectId, ref: 'author' }
});
const book = mongoose.model('book',bookschema );

module.exports =book;
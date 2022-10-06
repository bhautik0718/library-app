let admincontroller=require("../controller/admin")
let admin=require("../model/admin")
var jwt = require('jsonwebtoken');
const book = require("../model/book");
const author = require("../model/author");
const { find, findById } = require("../model/admin");




exports.signup=async function (req,res,next) {
    try {

        if (!req.body.name || !req.body.email || !req.body.password ) {
            throw new Error("plazz check filed")
        }

        if( req.body.password != req.body.repassword) {
           throw new  Error("plazz check password") 
        }

    data=await admin.create(req.body)

     await res.status(200).json({
        status:"success",
        message:"user successfull creat",
        data:data,
    
     } )
    } catch (error) {
        await res.status(404).json({
            status:"error",
            message:"user not defined",
            data:error.message,
         } )
    }

}


exports.author=async function (req,res,next) {
    try {
        id=req.params.id;
        
        console.log(id);
    if(!id)
    {
        let alldata=await author.find()
        // let alldata=await author.find

        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:" all data",
               data: alldata
       })
    }
    else{
        // let alldata=await author.find()
        let authorData = await author.findById(id)
        let authorBooks = await book.find({authorid: id})

        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:" all data",
               data: {authorData, books: authorBooks}
       })
    }
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}
exports.book=async function (req,res,next) {
    try {
        id=req.params.id;
        console.log(id);
    if(!id)
    {
        let alldata=await book.find()
        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:" all data",
               data: alldata
       })
    }
    else{
        let data=await book.findById(id)
        console.log(data);
        await res.status(200).json({
            status:"success",
            message:"all data",
            data
        })
    }
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}

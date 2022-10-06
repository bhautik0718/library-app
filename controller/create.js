const createdata=require("../controller/create")
const book=require("../model/book");
let author = require("../model/author");


exports.createget=async function(req, res, next) {
   
    try {
       let  data=await book.create(req.body)
    await res.status(200).json({
        status:"success",
        message:"user successfull creat",
        data:data
     } )
    } catch (error) {
        await res.status(404).json({
            status:"error",
            message:"user not defined",
            data:error.message,
         } )
    }
}
exports.catgoryget=async function(req, res, next) {
   
    try {
    let authorall=await author.create(req.body)
    await res.status(200).json({
        status:"success",
        message:"user successfull creat",
        data:authorall
     } )
    } catch (error) {
        await res.status(404).json({
            status:"error",
            message:"user not defined",
            data:error.message,
         } )
    }
}
exports.authorupdate=async function (req,res,next) {
    try {
        
        let data = {...req.body};
        let id=req.params.id;
        // console.log(data);
        // console.log(id);
        let alldata=await author.findByIdAndUpdate(id, {$set:data})
        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:" all data",
               data: data
       })
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}
exports.bookupdate=async function (req,res,next) {
    try {
        
        let data = {...req.body};
        let id=req.params.id;
        // console.log(data);
        // console.log(id);
        let alldata=await book.findByIdAndUpdate(id, {$set:data})
        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:" all data",
               data: data
       })
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}
exports.authordelete=async function (req,res,next) {
    try {
        
    
        let id=req.params.id;
        // console.log(data);
        // console.log(id);
        let alldata=await author.findByIdAndDelete(id)
        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:"data delete",
       })
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}
exports.bookdelete=async function (req,res,next) {
    try {
        
    
        let id=req.params.id;
        // console.log(data);
        // console.log(id);
        let alldata=await book.findByIdAndDelete(id)
        // console.log(alldata);
           await res.status(200).json({
               status:"success",
               message:"data delete",
       })
   

    } catch (error) {
       
       res.status(404).json({
           status:"faild",
           data:error.message
       })
    }
}


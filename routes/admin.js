var express = require('express');
var router = express.Router();
let admin=require("../model/admin") 

let admincontroller=require("../controller/admin");

/* GET home page. */
router.post('/signup',admincontroller.signup);
// router.get("/alldata",admincontroller.secure,admincontroller.alldata)
router.get("/author/:id?",admincontroller.author)
router.get("/book/:id?",admincontroller.book)

module.exports = router;

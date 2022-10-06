var express = require('express');
var router = express.Router();
const createdata=require("../controller/create")

/* GET home page. */
router.post('/author',createdata.catgoryget);

router.post('/book',createdata.createget);
router.patch('/authorupdate/:id?',createdata.authorupdate);
router.patch('/bookupdate/:id?',createdata.bookupdate);
router.delete('/authordelete/:id?',createdata.authordelete);
router.delete('/bookdelete/:id?',createdata.bookdelete);



module.exports = router; 

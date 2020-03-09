const express = require('express');
const router = express.Router();
const storeController=require('../controllers/storeController');

// Do work here
// router.get('/', (req, res) => {
//   const shital={name:'shital',lname:'thorat'};
//   // console.log("hey")
//   // res.send('Hey! It works!');//we cannot use send data more than once
//   // res.json(shital);//formatted to json
//   // res.send(req.query.name);
//   // res.json(req.query);
//   res.render('hello',{
//     name:'shital',
//     dog:'snickers'  
//   });  
// });
// router.get('/reverse/:name',(req,res)=>{
//   const reverse=[...req.params.name].reverse().join("");
//   res.send(reverse);
// })

router.get('/',storeController.myMiddleware,storeController.homePage);

module.exports = router;

const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const shital={name:'shital',lname:'thorat'}
  // res.send('Hey! works!');
  // res.json(shital);
  // res.send(res.query.name);
  res.json(res.query);
});

router.get('/reverse/:name',(req,res)=>{
  res.send("works");
})

module.exports = router;

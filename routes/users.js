var express = require('express');
var router = express.Router();
var nse=require("../services/nse")


function logMiddleware(req,res,next){
  
  console.log(req.session.c)
  
  if(req.session.c)
  {
    
    console.log(req.session.c)
    next()
  }
    else
    {
    res.status(401).send("Please login")
    }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with resource');
});


router.post('/login',function(req,res,next){
  let pwd = req.body.pwd;
 var uname = req.body.uname;

if(uname==="Batman" && pwd==="Iambatman")
{
  
       req.session.c="batman";
       req.session.save()
       console.log(req.session.c)
        res.status(200).send({message:"Login success"})
}
else 
res.status(400).send({message:"Login failed"})



})

router.get('/search',logMiddleware,async function(req, res, next) {
  
  try {
    res.status(200).send(await {data:(await  nse.getResult(req.query.key)).data});
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

router.get('/names',async function(req, res, next) {
  console.log(req.query.key)
  try {
    res.status(200).send(await {data:(await  nse.getNames(req.query.key)).data});
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});



module.exports = router;

var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Signup' });
});

router.post('/submit',function(req,res){
  console.log(req.body)

  MongoClient.connect("mongodb://localhost:27017",function(err,client){
    if(err)
    console.log('error')
    else
    client.db('UserDetails').collection('user').insertOne(req.body) //Creating database and collections in mongodb
    })
  res.send('Welcome')
})

module.exports = router;

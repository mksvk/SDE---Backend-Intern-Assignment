var router = require('express').Router();
const Tasks = require("../models/Tasks")
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


router.post('/add',jsonParser,(req, res)=>{
    var data = req.body
    var post = new Tasks(data)
    post.save().then((result)=>{
      res.status(200).json({ data: result})
    })
    
  
})

router.get('/',(req, res)=>{
    
    res.send("API Page")
  
})


router.get('/list',(req, res)=>{
    Tasks.find().then((result)=>{
          
      res.status(200).json({ data: result})
        
    }).catch((err)=>{
        res.send(err);
  });
})

module.exports = router;
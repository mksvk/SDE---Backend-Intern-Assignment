require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const api = require('./routes/api')
var cron = require('node-cron');
const Tasks = require("./models/Tasks")
const moment = require('moment')
const PORT = process.env.PORT || 5000;


const dbURI= "mongodb+srv://shakib:si4cpW0Bxds3LwFy@cluster0.0whbl.mongodb.net/tasks?retryWrites=true&w=majority";

mongoose.connect(dbURI).then((result)=>{
  console.log("db connected")
}).catch((err)=>console.log(err))




app.use("/api",api)




app.listen(PORT, ()=>{
  console.log(`Listening on ${ PORT }`)
  cron.schedule('* * * * * *', () => {
    
    Tasks.find().then((result)=>{
          result.map((e) =>{
           
            let date_ob = new Date();
            var newDateObj = moment(e.createdAt).toDate();
           
            a = date_ob.getHours()*60+ date_ob.getMinutes()  
            b = newDateObj.getHours()*60+  newDateObj.getMinutes()+e.taskduration
            console.log(e.taskduration)
            console.log(a)
            console.log(b)
            console.log(a>b)
          if(a>b){
                console.log(e._id.toString())
              Tasks.findById(e._id.toString()).then((result)=>{
                result.remove().then((rdata)=>{
                   console.log("removed"+rdata)
                })
          
              }).catch((err)=>{
                 console.log(err);
                });
          }
             
          })

        
    }).catch((err)=>{
      console.log(err)
       
    });

  });
});

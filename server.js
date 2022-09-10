require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const api = require('./routes/api')
const Agenda = require("agenda");
const PORT = process.env.PORT || 5000;
const dbURI= "mongodb+srv://shakib:si4cpW0Bxds3LwFy@cluster0.0whbl.mongodb.net/cordb?retryWrites=true&w=majority";


const agenda = new Agenda({ db: { address: dbURI } });


mongoose.connect(dbURI).then((result)=>{
  console.log("db connected")
}).catch((err)=>console.log(err))


agenda.on('ready', function() {
  console.log("agenda is ready");

});

app.use("/api",api)

app.listen(PORT, ()=>{
  console.log(`Listening on ${ PORT }`)
});


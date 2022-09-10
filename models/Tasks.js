const mongoose = require('mongoose');
const Agenda = require("agenda");
const dbURI= "mongodb+srv://shakib:si4cpW0Bxds3LwFy@cluster0.0whbl.mongodb.net/cordb?retryWrites=true&w=majority";

const agenda = new Agenda({ db: { address: dbURI } });

const tasks = new mongoose.Schema({
    taskname:{
        type:String
    },
    taskdes:{
        type:String
    },
    taskcreator:{
        type:String
    },
    taskduration:{
        type: Number
    },
    createdAt:{
        default: Date.now(),
        type: Date
    }

});

//delete data from DB cron job
agenda.define('delete',async(data,done) =>{
    console.log(data.attrs.data.id);
    const process = await Tasks.findById(data.attrs.data.id).then((result)=>{
      result.remove().then((rdata)=>{
         console.log("removed"+rdata)
         done();
      })}).catch((err)=>{
       console.log(err);});
   
});


//creating a delete event cron
tasks.post('save', async function(doc) {
    var time = `${doc.taskduration} minutes`
    console.log(time)
    agenda.start();
    console.log(doc._id.toString()+" will be deleted after "+time)
    await agenda.schedule(time,'delete',{ id: doc._id.toString()});
});

const Tasks = mongoose.model('tasks', tasks);

module.exports = Tasks;
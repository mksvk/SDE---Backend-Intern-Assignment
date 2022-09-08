const mongoose = require('mongoose');

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

const Tasks = mongoose.model('tasks', tasks);

module.exports = Tasks;
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
     name : {
        // Just this validators does not prevent error . We have to change it in PostTasks controller
         type : String,
         required : [true,'Name is Required'],
         trim:true,
         maxlength:[20,'Name cannot be more than 20 characters']
     },
     completed : {
        type : Boolean,
        default : false
     }
})

module.exports = mongoose.model('Task',TaskSchema)
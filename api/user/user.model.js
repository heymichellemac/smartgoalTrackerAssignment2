//Definition of User Schema and Smartgoal Schema

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var SmartgoalsSchema = new Schema({
        goaltitle: { type: String, required: true },
        specific: { type: String, required: true },
        measurable: {type:String, required:true},
        achievable: {type:String, required:true},
        relevant: {type:String, required:true},
        duedate: {type:String, required:true},
        currentstatus: {type:String, enum: ['In Progress', 'To do', 'Completed'] , required:true}
      });

    var UsersSchema = new Schema({
      username: { type: String, required: true },  
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      email: { type: String, required: true },
      jobtitle: { type: String, optional: true },
      password: { type: String, required: true },
      smartgoals: [SmartgoalsSchema]
    });
    
    module.exports = mongoose.model('users', UsersSchema);
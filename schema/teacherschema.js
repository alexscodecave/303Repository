const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

mongoose.Promise = global.Promise;
const teacheruser = new mongooseSchema({
    teacherEmail:String,
    teacherPassword:String,
})

const teacherModel = mongoose.model('Teacheruser',teacheruser);

module.exports = teacherModel;
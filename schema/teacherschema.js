const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

const teacheruser = new mongooseSchema({
    teacherEmail:String,
    teacherPassword:String,
})

const teacherModel = mongoose.model('Teacheruser',teacheruser);

module.exports = teacherModel;
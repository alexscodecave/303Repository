const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;
const userProfile = require('../secretfile')
mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
mongoose.Promise = global.Promise;
const users = new mongooseSchema({
    email:String,
    password:String
})

const userModel = mongoose.model('Userprofile',users);

module.exports = userModel;

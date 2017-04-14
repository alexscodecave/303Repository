const mongoose = require("mongoose");
const mongooseSchema = mongoose.Schema;

mongoose.Promise = global.Promise;
const users = new mongooseSchema({
    email:String,
    password:String
})

const userModel = mongoose.model('User',users);

module.exports = userModel;

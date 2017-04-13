const express = require("express");
const app = express();
const users = require("./schema/userschema")
const teachers = require("./schema/teacherschema")
const cParser = require("cookie-parser")
const bParser = require("body-parser")
const mongoose = require("mongoose");
const credentials = require("./secretfile.js")
const port = 3000;
app.use(bParser.json());
app.use(bParser.urlencoded({
    extended: true
}));
app.use(cParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render("index")
})

app.get('/userprofile', function (req, res) {

    res.render("userprofile", { email: req.body.loginemail })
})

app.post("/adduser", function (req, res) { //link to post data to database
    let userregister = new users({
        email: req.body.email,
        password: req.body.password
    })
    mongoose.connect(`mongodb://${credentials.user}:${credentials.password}@ds147480.mlab.com:47480/studenttimeline`)
    userregister.save(function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("User Added");   
            mongoose.disconnect();
        }
    })
    
    let getemail = userregister.email
    let splitemail = getemail.split("@")
    res.render("userprofile", { email: splitemail })
})
app.post("/registerteacher", function (req, res) { //link to post data to database
    let teacherregister = new teachers({
        teacherEmail: req.body.emailTeacher,
        teacherPassword: req.body.passwordTeacher
    })
    mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
    teacherregister.save(function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Teacher Added");
            mongoose.disconnect();
            
        }
    })
    
    res.render("teacherprofile")
})

app.post("/login", function (req, res) {
    //here we are using the exported module to findone instance of email and password within the database
    //if a matching email and password which is entered into the form is found in the database
    users.findOne({ email: req.body.loginemail, password: req.body.loginpassword }, function (err, userdetails) {
        if (err) {
            console.log(err)
        }
        else if (userdetails) {
            let getemail = req.body.loginemail
            let splitemail = getemail.split("@")
            res.render("userprofile", { email: splitemail })
            console.log('User found'); //print this to the console.
        } else {
            console.log('No login found with those credentials')
        }
    })
})
//LOGIN FOR TEACHER
app.post("/loginteacher", function (req, res) {
    //here we are using the exported module to findone instance of email and password within the database
    //if a matching email and password which is entered into the form is found in the database
    teachers.findOne({ email: req.body.loginemailTeacher, password: req.body.loginpasswordTeacher}, function (err, userdetails) {
        if (err) {
            console.log(err)
        }
        else if (userdetails) {
            let getemail = req.body.loginemailTeacher
            let splitemail = getemail.split("@")
            res.render("teacherprofile", { email: splitemail })
            console.log('User found'); //print this to the console.
        } else {
            console.log('No login found with those credentials')
        }
    })
})

app.listen(process.env.PORT || 3000);
console.log("Listening on port %s", port)
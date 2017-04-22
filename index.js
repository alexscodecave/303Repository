const express = require("express");
const app = express();
const users = require("./schema/userschema")
const teachers = require("./schema/teacherschema")
const cParser = require("cookie-parser")
const bParser = require("body-parser")
const mongoose = require("mongoose");
const socketio = require("socket.io")


const port = 3000;
app.use(bParser.json());
app.use(bParser.urlencoded({
    extended: true
}));
app.use(cParser());
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render("index")
})

app.get('/chat', function(req,res){
    res.render("groupchat")
})

/*REGISTER USER */

app.post("/registeruser", function (req, res) { //link to post data to database
    mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
    let userregister = new users({
        email: req.body.email,
        password: req.body.password
    })
    let response = "User already exists"
    users.findOne({ email: req.body.email }, function (err, finduser) { //check if user email already in database
        if (err) {
            console.log(err)
        }
        if (finduser) { //if user within email is found then log error
            console.log("User already exists")
            alert("User already exists please ensure you typed in the correct email")
            res.render("index", { response: response })
        }
        else { //else if user is not found then save the data
            userregister.save(function (err, data) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("User added")
                    mongoose.disconnect(); //disconnect from mongoose
                    let getemail = userregister.email
                    let splitemail = getemail.split("@")
                    splitemail.pop() //split text at the @ symbol

                    res.render("userprofile", { email: splitemail }) //render page and put data into that page
                }
            })
        }
    })
})

/*REGISTER TEACHER */
app.post("/registerteacher", function (req, res) { //link to post data to database
    mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
    let teacherregister = new teachers({
        teacherEmail: req.body.teacherEmail,
        teacherPassword: req.body.teacherPassword
    })
    teachers.findOne({ email: req.body.teacherEmail }, function (err, findteacher) {
        if (err) {
            console.log(err)
        }
        if (findteacher) {
            console.log("User already exists")
            alert("User already exists please ensure you typed in the correct email")
            res.render("index")
        }
        else {
            teacherregister.save(function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Teacher Added");
                    mongoose.disconnect();
                    let getemail = teacherregister.emailTeacher
                    let splitemail = getemail.split("@")
                    splitemail.pop() //split text at the @ symbol
                    res.render("teacherprofile", { email: getemail })
                }
            })
        }
    })
})
/*LOGIN USER */
app.post("/loginuser", function (req, res) {
    //here we are using the exported module to findone instance of email and password within the database
    //if a matching email and password which is entered into the form is found in the database
    mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
    users.findOne({ email: req.body.loginemail, password: req.body.loginpassword }, function (err, userdetails) {
        if (err) {
            console.log(err)
        }
        else if (userdetails) {
            let getemail = req.body.loginemail
            let splitemail = getemail.split("@")
            splitemail.pop()
            mongoose.disconnect();
            res.render("userprofile", { email: splitemail })
        }
    })
})
//LOGIN FOR TEACHER
app.post("/loginteacher", function (req, res) {
    //here we are using the exported module to findone instance of email and password within the database
    //if a matching email and password which is entered into the form is found in the database
    mongoose.connect('mongodb://alex:123@ds147480.mlab.com:47480/studenttimeline')
    teachers.findOne({ loginemailTeacher: req.body.loginemailTeacher, loginpasswordTeacher: req.body.loginpasswordTeacher }, function (err, userdetails) {
        if (err) {
            console.log(err)
        }
        else if (userdetails) {
            let getemail = req.body.loginemailTeacher
            let splitemail = getemail.split("@")
            res.render("teacherprofile", { email: splitemail })
            mongoose.disconnect();
        }
        else{
            res.redirect('/')
            console.log("Teacher not found")
            mongoose.disconnect();
        }
    })
    
})

app.listen(process.env.PORT || 3000);
console.log("Open on port %s", port)

const express = require("express");
const app = express();
const users = require("./schema/userschema")
const cParser = require("cookie-parser")
const bParser = require("body-parser")

const port = 3000;
app.use(bParser.json());
app.use(bParser.urlencoded({
    extended: true
}));
app.use(cParser());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req,res) {
    res.render("index")
})
app.get('/userprofile',function(req,res){
    res.render("userprofile")
})

app.post("/adduser", function (req, res) { //link to post data to database
    let userregister = new users({
        email: req.body.email,
        password: req.body.password
    })
    userregister.save(function(err,data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("User Added");
        }
    })
    res.redirect('/')
})

app.post("/login", function(req,res){
    //here we are using the exported module to findone instance of email and password within the database
    //if a matching email and password which is entered into the form is found in the database
    users.findOne({email:req.body.loginemail,password:req.body.loginpassword}, function(err,userdetails){
        if(err){
            console.log(err)
        }
        else if(userdetails){
            res.redirect("/userprofile"); //redirect to homepage
            console.log('User found'); //print this to the console.
        }else{
            console.log('No login found with those credentials')
        }
    })
})

app.listen(process.env.port || 3000);
console.log("Listening on port %s", port)
const express = require("express");
const app = express();

const port=3000;

app.use(express.static(__dirname+'/public'));

app.get('/', function(res,req){
    res.render("index")
})

app.listen(process.env.port || 3000);
console.log("Listening on port %s",port)
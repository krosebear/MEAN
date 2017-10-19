var express = require('express')
var session = require('express-session')
var app = express()
var path = require("path")
var bodyParser = require('body-parser');
var PORT = 8000

app.use(session({
  secret: 'codingdojorocks',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));


app.use(express.static(path.join(__dirname, "./../client/dist/")))
// require("./server/config/routes.js")(app)


app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`)
})

//this talks to angular I think
app.all('*',  (req, res, next) => {
  res.sendFile(path.resolve("./../client/dist/index.html"))
});
//

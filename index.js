const express = require('express')
const path = require('path')
const app = express()


app.use("/node_modules", express.static(__dirname + '/node_modules'));
//app.set('view engine', 'html')
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/loggedIn', function(req,res){
	res.sendFile(path.join(__dirname+'/views/loggedIn.html'));
})

app.get('/loggedOut', function(req,res){
	res.send("Logged out");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
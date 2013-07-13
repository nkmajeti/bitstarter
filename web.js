var express = require('express');

var app = express.createServer(express.logger());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var file = require("fs")


app.get('/', function(request,response){
    var buffer = file.readFileSync("index.html")
    response.send(buffer.toString())
});

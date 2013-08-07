var express = require('express');
var fs = require('fs');

//var app = express.createServer(express.logger());
var app = express();

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var buffer = fs.readFileSync('index.html');
    var bufferString = buffer.toString();
    response.send(bufferString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

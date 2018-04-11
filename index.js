var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!This is Testing Deployment on Azure instance Through Travis Ci");
    var fs = require("fs");

var data = fs.readFileSync('package.json');

console.log(data.toString());
console.log("Program Ended");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

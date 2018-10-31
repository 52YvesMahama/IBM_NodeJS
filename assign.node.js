var http = require("http");
var fs = require('fs');


//Print avarage
let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log('The Avarage is '+avg);
// avg = 28

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    // Send the response body as "Hello World"
    response.end('<h2>The Avarage is '+avg+'</h2>');
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');



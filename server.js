const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    if (req.method === 'POST') {
         // console.log("POST");
         // let body = '';
        req.on('data', function (data) {
            // body += data;
            // console.log("Partial body: " + body);
            fs.writeFile('api_res.json', data, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });
        });

        res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*'});
        res.end('{"msg": "OK"}'); // removed the callback because it was not relevant in the client code
        
        // req.on('end', function () {
        //    console.log("Body: " + body);// + body
        // });
    }
    else {
        //console.log("GET");
        res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
        res.end('{"msg": "OK"}'); // removed the callback because it was not relevant in the client code
    }

}).listen(8080);
console.log('Server running on port 8080');
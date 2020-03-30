const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer(function (req, res) {

    if(req.url.match(/.css$/)){

        let cssPath = path.join(__dirname, "public", req.url);
        let cssReadStream = fs.createReadStream(cssPath, 'UTF-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        cssReadStream.pipe(res);
    }

    if(req.url.match(/.js$/)){

        let jsPath = path.join(__dirname, "public", req.url);
        let jsReadStream = fs.createReadStream(jsPath, 'UTF-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        jsReadStream.pipe(res);

    }

    if(req.url.match(/.jpg$/)){

        let jpgPath = path.join(__dirname, "public", req.url);
        let jpgReadStream = fs.createReadStream(jpgPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        jpgReadStream.pipe(res);
    }

    if (req.url === '/') {

        fs.readFile('./public/index.html', 'UTF-8', (err, html)=> {

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(html);
        });
    }
});

server.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong: ', err)
    } else {
        console.log("server is listening on port: " + port)
    }
});
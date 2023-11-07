/*
 * Write your server code in this file.
 *
 * name: Abdulelah Alanazi 
 * email:Alanaza7@oregonstate.edu 
 */


var http = require('http');

const PORT = process.env.PORT || 3000;
const fs = require('fs');

var index = fs.readFileSync('./public/index.html', 'utf8');
var style = fs.readFileSync('./public/style.css', 'utf8');
var javascript = fs.readFileSync('./public/index.js', 'utf8');
var fourZeroFour = fs.readFileSync('./public/404.html', 'utf8');

var server = http.createServer(function (req, res) {
  if (req.url == "/index.html" || req.url == "/"){
    res.writeHead(200, { 
      "Content-Type": "text/html"
    })
    res.write(index);
    res.end();
  }
  else if (req.url == "/style.css"){
    res.writeHead(200, { 
      "Content-Type": "text/css"
    })
    res.write(style);
    res.end();
  }
  else if(req.url == "/index.js"){
    res.writeHead(200, { 
      "Content-Type": "application/javascript"
    })
    res.write(javascript);
    res.end();
  }
  else if(req.url == "/404.html"){
    res.writeHead(200, { 
      "Content-Type": "text/html"
    })
    res.write(fourZeroFour);
    res.end();
  }
  else {
    res.writeHead(404, { 
      "Content-Type": "text/html"
    })
    res.write(fourZeroFour);
    res.end();
  }

  


});


server.listen(PORT, function () {

  console.log("Server  listening on port " + PORT);


});
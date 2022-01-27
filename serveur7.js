var http = require('http');
var url = require('url');
const fs = require('fs')

var server = http.createServer(function(req, res) {
	  console.log (' bienvenue '); 
	   var page = url.parse(req.url).pathname;
	    console.log(page);

	 if (page == '/monstyle.css') {
		  res.writeHead(200, {"Content-Type": "text/css"}); 
	   fs.createReadStream('monstyle.css').pipe(res);
	   
	}
	
	else{
	
		  res.writeHead(200, {"Content-Type": "text/html"});
		  console.log(page);

			if (page == '/') {
				fs.createReadStream('index.html').pipe(res);

			}
			if (page == '/axel') {
				fs.createReadStream('axel.html').pipe(res);

			}
			if (page == '/lucas') {
			   fs.createReadStream('lucas.html').pipe(res);
			
			}
			if (page == '/max') {
			   fs.createReadStream('max.html').pipe(res);
			   
			}
			if (page == '/mapage') {
			   fs.createReadStream('mapage.html').pipe(res);
			   
			
			}
			if (page == '/boot') {
			   fs.createReadStream('boot.html').pipe(res);
			   
			}
	}
			
});

server.listen(8080);
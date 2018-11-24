var express = require('express');
var path = require('path');
var fs = require('fs')
var https = require('https')
var http = require('http')
var app = express();

var http_app = http.Server(app);

app.use(express.static('./public'));

// 从 pms 路径下开始找的
var privateKey = fs.readFileSync(path.resolve('./https/server.key'), 'utf8');
var certificate = fs.readFileSync(path.resolve('./https/server.crt'), 'utf8');
var credentials = { key: privateKey, cert: certificate };

var httpsServer = https.createServer(credentials, app);
http_app.listen(80);
httpsServer.listen(443)

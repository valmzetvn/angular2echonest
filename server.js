
var express = require('express'),
    http = require('http');

var app = express();
var port = process.env.PORT || 8888;


// Dossier public pour servir des assets statiques
app.use("/", express.static(__dirname + "/src/public/"));

// 3…2…1…Démarrage
var server = http.createServer(app).listen(port, function() {
  console.log('Serveur Express sur le port ' + port);
});
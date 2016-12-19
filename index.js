var express = require('express'),
app = express();
var port = process.env.PORT || 8080;
app.use('/', express.static(__dirname + '/'));
app.listen(port);

console.log('Aplicación corriendo en: http://localhost:' + port);

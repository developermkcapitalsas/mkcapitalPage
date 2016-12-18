var app = express();
var server = require('https').Server(app);
var fs = require('fs');

app.use(express.static('public'));

server.listen(3000, function(io){
	console.log("Servidor corriendo en http://localhost:3000");
})

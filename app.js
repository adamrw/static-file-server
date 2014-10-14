var fs=require('fs');
var express=require('express');

var app=express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

fs.readFile('data.txt', function(err, data){
	app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html');
	res.send(data);
	});	
});


var server=app.listen(6191, function() {
	console.log('Express server listening on port ' + server.address().port);
});

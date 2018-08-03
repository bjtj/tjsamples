var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'sample.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
    if (err) {
	console.log(err);
	return;
    }
    console.log('RECIEVED DATA: ' + data);
});

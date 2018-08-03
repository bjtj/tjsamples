var fs = require('fs');


fs.writeFile('out.txt', 'hello', function(err) {
    if (err) {
	return console.log(err);
    }
    console.log('[write] done');

    fs.readFile('out.txt', function(err, data) {
	if (err) {
	    return console.log(err);
	}
	console.log('[read] DATA: ' + data);

	fs.unlink('out.txt', (err) => {
	    if (err) throw err;
	    console.log('[unlink] done');
	});
    });
});







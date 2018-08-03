var md = require('markdown-it')();
var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf-8'}, function(err, data) {
    if (err) throw err;
    console.log(md.render(data));
});


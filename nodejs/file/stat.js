const fs = require('fs');

const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (var i = 0; i < pathsToCheck.length; i++) {
  fs.stat(pathsToCheck[i], function(err, stats) {
    console.log(stats.isDirectory());
    console.log(stats);
  });
}

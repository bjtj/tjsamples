const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

stat('./').then((stats) => {
    // do something with 'stats'
    console.log(`This directory is owned by ${stats.uid}`);
}).catch((error) => {
    // handle the error
    console.error(`error -- ${error}`);
});


stat('x').then((stats) => {
    // do something with 'stats'
    console.log(`This directory is owned by ${stats.uid}`);
}).catch((error) => {
    // handle the error
    console.error(`error -- ${error}`);
});


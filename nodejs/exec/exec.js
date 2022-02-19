const { exec } = require("child_process");

var command = 'ls -l'
if (process.argv[2]) {
	command = process.argv[2]
}

console.log(`command -> '${command}'`)
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

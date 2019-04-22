// https://gist.github.com/scripting/59498807e081b876a2b6

var ws = require("nodejs-websocket");
var port = 1337;

function handleConnection(conn) {
    conn.on("text", function (s) {
	var str = s.toUpperCase() + "!!!";
	console.log("handleConnection: returning " + str);
	conn.sendText(str);
    });
}

ws.createServer(handleConnection).listen(port);

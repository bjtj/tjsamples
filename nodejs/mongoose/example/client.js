var Client = require('node-rest-client').Client;

var client = new Client();

client.get('http://localhost:4500/todos', function (data, response) {
    console.log(data);
    // console.log(response);
});

client.registerMethod('jsonMethod', 'http://localhost:4500/todos', 'GET');

client.methods.jsonMethod(function (data, response) {
    console.log(data);
    // console.log(response);
});

var args = {
    data: { todoid: 1, content: 'Task 1' },
    headers: { 'Content-Type': 'application/json' }
};

client.post('http://localhost:4500/todos', args, function (data, response) {
    console.log(data);
    // console.log(response);
});

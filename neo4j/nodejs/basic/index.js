const neo4j = require('neo4j-driver').v1;

let uri = process.env.NEO4J_URI || 'bolt://10.100.1.121:7687';
let user = process.env.NEO4J_USER || 'neo4j';
let password = process.env.NEO4J_PASSWD || 'neo4j';

console.log('uri: ' + uri);
console.log('user: ' + user);
console.log('passwd: ' + password);

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();
const personName = 'Alice';
const resultPromise = session.run(
    'CREATE (a:Person {name: $name}) RETURN a',
    {name: personName}
);

resultPromise.then(result => {
    session.close();
    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    console.log(node.properties.name);
    driver.close();
});

// https://stackoverflow.com/a/22348862
var options = require('./options');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(options.storageConfig.dburl);

// https://www.npmjs.com/package/system-sleep
var sleep = require('system-sleep')


// Test the connection
sequelize.authenticate()
    .then(() => {
	console.log('Connection has been established successfully.');
    })
    .catch(err => {
	console.log('Unable to connect to the database:', err);
    });


// Your first model
console.log('[define]')
const User = sequelize.define('user', {
    firstName: {
	type: Sequelize.STRING
    },
    lastName: {
	type: Sequelize.STRING
    }
});

console.log('[sync]')
User.sync({force: true}).then(()=> {
    return User.create({
	firstName: 'John',
	lastName: 'Hancock'
    });
});


// Your first query

sleep(1000)

console.log('[find all]')
User.findAll().then(users => {
    console.log(users)
});

sleep(1000)

process.exit()

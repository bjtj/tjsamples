


var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
	resolve('foo');
    }, 300);
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
	reject('fxx');
    }, 200);
});

promise1
    .then(value => {
	console.log(`then - ${value}`);
    })
    .catch(err => {
	console.error(`catch - ${err}`);
    });

promise2
    .then(value => {
	console.log(`then - ${value}`);
    })
    .catch(err => {
	console.error(`catch - ${err}`);
    });

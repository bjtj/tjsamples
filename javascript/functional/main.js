// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98

var materials = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
];


// ---
// map
// ---


// identical
console.log(materials.map(material => material));

// length
console.log(materials.map(material => material.length));


// -------
// forEach
// -------

var ret = materials.forEach(function (e) {
    console.log(e.toUpperCase());
});

console.log(ret);		// undefined


[1,2,3].forEach((item, index) => console.log('item:', item, ', index:', index));


// ------
// filter
// ------

var ret = materials.filter(e => e[0] == 'H');
console.log(ret);
var ret = materials.filter(e => e[0] != 'H');
console.log(ret);
console.log(materials);


// -------
// closure
// -------


function makeClosure(i) {
    return function() {
	i++;
	console.log(i);
	return i;
    };
}

var closure = makeClosure(0);
closure();
closure();
closure();

var closure = makeClosure(0);
closure();
closure();
closure();

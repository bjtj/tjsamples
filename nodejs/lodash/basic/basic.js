// Load the full build.
var _ = require('lodash');

console.log(`Lodash Version: ${_.VERSION}`);

console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
// → { 'a': 1, 'b': 2 }
console.log(_.partition([1, 2, 3, 4], n => n % 2));
// → [[1, 3], [2, 4]]

// Load the core build.
var _ = require('lodash/core');

console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
// → { 'a': 1, 'b': 2 }
// console.log(_.partition([1, 2, 3, 4], n => n % 2)); -- TypeError: _.partition is not a function
// // → [[1, 3], [2, 4]]

// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


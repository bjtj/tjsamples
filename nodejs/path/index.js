const path = require('path');

console.log(path.delimiter);    // WINDOWS: `;`
console.log(path.sep);    // WINDOWS: `\`

// BASENAME
console.log(path.basename('/a/b/c')); // `c`
console.log(path.basename('/a/b/c.png')); // `c.png`
console.log(path.extname('/a/b/c.png'));    // `.png`

// DIRNAME
console.log(path.dirname('/a/b/c.png'));  // `/a/b`
console.log(path.dirname('/a/b/c/'));  // `/a/b`

// RESOLVE
console.log(path.resolve('/a/b/c.png'));  // WINDOWS: `c:\a\b\c.png`
console.log(path.resolve('x', '/a/b/c.png'));  // WINDOWS: `c:\a\b\c.png`
console.log(path.resolve('x', 'a/b/c.png'));  // WINDOWS: `c:\%PWD%\x\a\b\c.png`

// JOIN
console.log(path.join('x', '/a/b/c.png'));  // WINDOWS: `x\a\b\c.png`
console.log(path.join('x', 'a/b/c.png'));  // WINDOWS: `x\a\b\c.png`

// POSIX
console.log(path.posix.resolve('/a/b/c.png'));  // WINDOWS: `/a/b/c.png`
console.log(path.posix.delimiter);    // WINDOWS: `:`
console.log(path.posix.sep);    // WINDOWS: `/`

// RELATIVE
// 
// <https://nodejs.org/api/path.html#pathrelativefrom-to>
// 
// The `path.relative()` method returns the relative path from `from` to `to` based on the current working directory. If `from` and `to` each resolve to the same path (after calling `path.resolve()` on each), a zero-length string is returned.
// 
console.log(path.relative('./', './xyz')); // `xyz`
console.log(path.relative('./', './x/y/z/')); // WINDOWS: `x\y\z`
console.log(path.relative('../', './x/y/z/')); // WINDOWS: `path\x\y\z`


console.log(path.toNamespacedPath('./')); // WINDOWS: `\\?\c:\%PWD%`

// normalize
console.log(path.normalize(__dirname + '/../x'));

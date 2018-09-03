
// contains
console.log('hello'.includes('ll'));
console.log('hello'.includes('LL'));

// upper
console.log('hello'.toUpperCase());

// lower
console.log('Hello'.toLowerCase());

// capital
// https://stackoverflow.com/a/3291856
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
console.log(capitalize('Hello wOrld'));

// trim
console.log("'" + "    hello      ".trim() + "'");

// split
console.log(" hello world a b c ".split(" "));
console.log(" hello world a b c ".split(" ", 2));

// split lines
// https://stackoverflow.com/a/5035058
var text = "hello\nworld\n\nbye\n";
var lines = text.match(/[^\r\n]+/g);
console.log(lines.length);
for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    console.log("[" + i + "] " + line);
}

// is empty
var str = "x";
console.log("'" + str + "' is empty? " + (str === ""))
str = "";
console.log("'" + str + "' is empty? " + (str === ""))
str = null;
console.log("'" + str + "' is empty? " + (str === ""))

// substring
console.log("hello world".substring(2, 5));

// reverse
console.log("hello".split("").reverse().join(""));

// length
console.log("hello world".length);

// unicode
console.log("\u2661");

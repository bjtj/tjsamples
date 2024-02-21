// lib/hello.ts
function hello(name) {
  return `Hello, ${name}!!`;
}

// index.ts
console.log("Hello via Bun!!!");
console.log(hello("Bun"));

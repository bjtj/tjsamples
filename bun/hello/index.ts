import { hello } from "./lib/hello";

export * from './lib/hello';

console.log("Hello via Bun!!!");
console.log(hello('Bun'));

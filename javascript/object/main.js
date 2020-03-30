


const table = {}

console.log(table);

table['a'] = 'A';

console.log(table);

console.log(table['a'] !== undefined);

console.log(table['b'] !== undefined);

console.log(table['b'] === undefined);

table['b'] = 'B';


for(let key in table) {
  console.log('key:', key, '/ value:', table[key]);
}

const comma = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(comma(1));
console.log(comma(10));
console.log(comma(100));
console.log(comma(1000));
console.log(comma(10000));
console.log(comma(100000));
console.log(comma(1000000));
console.log(comma(10000000));
console.log(comma(100000000));
console.log(comma(1000000000));
console.log(comma(10000000000));
console.log(comma(100000000000));
console.log(comma(1000000000000));
console.log(comma(10000000000000));
console.log(comma(100000000000000));
console.log(comma(1000000000000000));


const commaHuman = number => {
  let ret = [];
  if (number >= 10000000000000000) {
    ret.push(`${comma(parseInt(number / 10000000000000000))}경`)
    number %= 10000000000000000;
  }
  if (number >= 1000000000000) {
    ret.push(`${comma(parseInt(number / 1000000000000))}조`)
    number %= 1000000000000;
  }
  if (number >= 100000000) {
    ret.push(`${comma(parseInt(number / 100000000))}억`)
    number %= 100000000;
  }
  if (number >= 10000) {
    ret.push(`${comma(parseInt(number / 10000))}만`)
    number %= 10000;
  }
  ret.push(`${comma(number % 10000)}`);

  return ret;
}


console.log(commaHuman(0));
console.log(commaHuman(1));
console.log(commaHuman(10));
console.log(commaHuman(100));
console.log(commaHuman(1000));
console.log(commaHuman(10000));
console.log(commaHuman(100000));
console.log(commaHuman(1000000));
console.log(commaHuman(10000000));
console.log(commaHuman(100000000));
console.log(commaHuman(1000000000));
console.log(commaHuman(10000000000));
console.log(commaHuman(100000000000));
console.log(commaHuman(1000000000000));
console.log(commaHuman(10000000000000));
console.log(commaHuman(100000000000000));
console.log(commaHuman(1000000000000000));
console.log(commaHuman(2637820981240193));

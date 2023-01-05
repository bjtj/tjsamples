


const arr = [1,2,3,4,5];

const chunk = 2;
const ret = [];
for (var i = 0, j = arr.length; i < j; i+=chunk) {
  ret.push(arr.slice(i, i + chunk));
}

  console.log(ret);

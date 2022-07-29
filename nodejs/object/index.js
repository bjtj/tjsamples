

(async () => {
  let obj = {
    field: 'my field'
  }
  
  console.log('field' in obj);

  console.log(!('field' in obj));

  console.log(JSON.stringify(obj));
  console.log(JSON.stringify(obj, null, 2));

  console.log(JSON.parse(JSON.stringify(obj, null, 2)));
})();

// export default {
//   input: 'src/main.js',
//   output: {
//     file: 'bundle.js',
//     format: 'cjs'
//   }
// };


import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [json()]
};

// import foo from './foo.js';
// export default function() {
//   console.log(foo);
// }


import { version } from '../package.json';

export default function() {
  console.log('version ' + version);
}

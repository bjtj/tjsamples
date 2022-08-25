// import { fromEvent } from 'rxjs';
// fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));


// import { fromEvent, scan } from 'rxjs';
// fromEvent(document, 'click')
//   .pipe(scan((count) => count + 1, 0))
//   .subscribe((count) => console.log(`Clicked ${count} times`));


// import { fromEvent, throttleTime, scan } from 'rxjs';
// fromEvent(document, 'click')
//   .pipe(
//     throttleTime(1000),
//     scan((count) => count + 1, 0)
//   )
//   .subscribe((count) => console.log(`Clicked ${count} times`));


import { fromEvent, throttleTime, map, scan } from 'rxjs';
fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));

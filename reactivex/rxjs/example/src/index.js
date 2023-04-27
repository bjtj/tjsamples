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


import { fromEvent, throttleTime, map, scan, asyncScheduler, tap, delay, debounceTime } from 'rxjs';
fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));

// only last click event will be triggered
fromEvent(document.querySelector('#btn1'), 'click')
.pipe(
    debounceTime(1000),
  ).subscribe((event) => console.log(event));
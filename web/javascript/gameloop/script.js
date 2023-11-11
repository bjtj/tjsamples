let context;
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {
  // Calculate the number of seconds passed since the last frame
  secondsPassed = (timeStamp - oldTimeStamp) / 1000;
  oldTimeStamp = timeStamp;

  // Calculate fps
  fps = Math.round(1 / secondsPassed);

  // Draw number to the screen
  context.fillStyle = 'white';

  context.fillRect(0, 0, 500, 500);
  context.font = '25px Arial';
  context.fillStyle = 'black';
  context.fillText("FPS: " + fps, 10, 30);

  // Perform the drawing operation
  draw();

  // The loop function has reached it's end. Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}

function init(foo) {
  window.onload = () => {
    context = document.querySelector('#canvas1').getContext('2d');
    foo?.();
    window.requestAnimationFrame(gameLoop);
  };
}

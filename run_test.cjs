const EventEmitter = require('events');

const clickElement = new EventEmitter();
const video = new EventEmitter();

// Simulate addEventListener since it's asked to run the code
clickElement.addEventListener = clickElement.on;
video.addEventListener = video.on;

let endListener = false;

clickElement.addEventListener("click", () => {
  if (endListener) {
    endListener = false;
  } else {
    endListener = true;
  }
  console.log("-> Click triggered! endListener is now:", endListener);
});

video.addEventListener("ended", () => {
  if (endListener) return console.log("listener ended");

  //endListener =false then below code runs

  console.log("Video has ended");
});

console.log("Setting up...");
console.log("--- Emitting video ended ---");
video.emit("ended"); // should log 'Video has ended'
console.log("--- Emitting click ---");
clickElement.emit("click"); // toggles endListener to true
console.log("--- Emitting video ended ---");
video.emit("ended"); // should log 'listener ended'
console.log("--- Emitting click ---");
clickElement.emit("click"); // toggles endListener to false
console.log("--- Emitting video ended ---");
video.emit("ended"); // should log 'Video has ended'

// INIT LITERALS AND VARIABLES
const STARTING_COORD = 200;
let direction = "NONE"
let intervalID;
let x = STARTING_COORD;
let y = STARTING_COORD;

// GET CANVAS AND INITIALIZE
const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(x, y, 5, 5);

// LISTEN TO THE KEYSTROKES AND ADJUST ACCORDINGLY
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  const prevDirection = direction
  clearInterval(intervalID);
  const keyCode = event.keyCode;
  switch(keyCode){
    case 38:
      direction = "UP"
      break;
    case 40:
      direction = "DOWN"
      break;
    case 39:
      direction = "RIGHT"
      break;
    case 37:
      direction = "LEFT"
      break;
  }
  const boundHandler = onTimerTick.bind({direction, prevDirection});
  intervalID = setInterval(boundHandler, 33);
});

//GAME FUNCTION
function onTimerTick() {
  if(this.direction) {
    switch(this.direction){
      case "UP":
        y -= 5;
        break;
      case "DOWN":
        y += 5;
        break;
      case "LEFT":
        x -= 5;
        break;
      case "RIGHT":
        x += 5;
        break;
    }
    const info = ctx.getImageData(x, y, 5, 5).data;
    const hex = "#" + ("000000" + rgbToHex(info[0], info[1], info[2])).slice(-6);
    if (hex === ctx.fillStyle || x < 0 || y< 0) {
      window.alert("YOU LOSE");
      clearInterval(intervalID);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x = STARTING_COORD;
      y = STARTING_COORD;
      ctx.fillRect(x, y, 5, 5);
    } else {
      ctx.fillRect(x, y, 5, 5);
    }
  }
 }


//HELPER_FUNCTION: TURNS RGB VALUES INTO A HEX-CODE
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

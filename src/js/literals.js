const SETUP = `<div class="setup">
  <p>Enter Names:</p>
  <div class="player" id="p1Setup">
    <label>Player 1</label>
    <input type="text" id="name_1"> 
  </div>
  <br />
  <div class="player" id="p2Setup">
    <label>Player 2</label>
    <input type="text" id="name_2">
  </div>
  <br />
  <input id="submit" type="button" value="Done" />
</div>
    `;

const COLORPICKER = `<div class="colorPicker">
  <div class="pickerChoice blue" data-color="blue"></div>
  <div class="pickerChoice red" data-color="red"></div>
  <div class="pickerChoice green" data-color="green"></div>
  <div class="pickerChoice yellow" data-color="yellow"></div>
</div>
`;

const STARTING_COORD = 200;

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

//DIRECTIONS
const UP = "UP";
const DOWN = "DOWN";
const LEFT = "LEFT";
const RIGHT = "RIGHT";
const NONE = "NONE";

//COLORS
const BLUE = "#0066ff";
const GREEN = "#33cc33";
const YELLOW = "#ffff00";
const RED = "#ff0000";

// INIT LITERALS AND VARIABLES
const GAME = {
  intervalID: undefined,
  ctx: undefined,
  playerInfo: {},
  onTimerTick: undefined,
  scores: undefined,
  player1: {
    name: undefined,
    x_pos: STARTING_COORD,
    y_pos: STARTING_COORD,
    direction: NONE,
    color: "red",
  },
  player2: {
    name: undefined,
    x_pos: STARTING_COORD,
    y_pos: STARTING_COORD * 2,
    direction: NONE,
    color: "blue",
  },
};

export {
  SETUP,
  COLORPICKER,
  STARTING_COORD,
  GAME,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  UP,
  DOWN,
  LEFT,
  RIGHT,
  NONE,
  BLUE,
  RED,
  GREEN,
  YELLOW,
};

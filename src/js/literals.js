const SETUP = `<div class="setup">
        <p>Enter Names:</p>
        <label>Player 1</label>
        <input type="text" id="name_1"></input>
        <br />
        <label>Player 2</label>
        <input type="text" id="name_2"></input>
        <br />
        <input id="submit" type="button" value="Done" />
    </div>
    `;

const COLORPICKER = `<div class="colorPicker">
<div class="pickerChoice blue" ></div>
<div class="pickerChoice red" ></div>
<div class="pickerChoice green" ></div>
<div class="pickerChoice yellow" ></div>
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
    x_pos: undefined,
    y_pos: undefined,
    direction: NONE,
  },
  player2: {
    name: undefined,
    x_pos: undefined,
    y_pos: undefined,
    direction: NONE,
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

const NAMEINPUT = `<div class="setup">
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

const STARTING_COORD = 200;

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
    direction: "NONE",
  },
  player2: {
    name: undefined,
    x_pos: undefined,
    y_pos: undefined,
    direction: "NONE",
  },
};

export { NAMEINPUT, STARTING_COORD, GAME };

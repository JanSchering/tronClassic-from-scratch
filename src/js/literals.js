const NAMEINPUT = `<div class="setup">
        <label>Name</label>
        <input type="text"></input>
        <input id="submit" type="button" value="Done" />
    </div>
    `;

const STARTING_COORD = 200;

// INIT LITERALS AND VARIABLES
const GAME = {
  intervalID: undefined,
  ctx: undefined,
  playerInfo: {},
  direction: "NONE",
  onTimerTick: undefined,
  scores: undefined,
  x: STARTING_COORD,
  y: STARTING_COORD,
};

export { NAMEINPUT, STARTING_COORD, GAME };

import * as Literals from "./literals.js";
import { createPlayers } from "./players.js";
import { getColorCode } from "./utils.js";
import { init } from "./init.js";
import { addKeydownListener } from "./listeners.js";

let gameInfo = Literals.GAME;
gameInfo.onTimerTick = onTimerTick;

const initFunc = init.bind(gameInfo);

async function main() {
  const { x, y } = gameInfo;
  await initFunc();
  const listener = addKeydownListener.bind(gameInfo);
  listener();
}

main();

//GAME FUNCTION
function onTimerTick() {
  let { direction, previousDirection, x, y } = this;
  const { ctx, intervalID } = gameInfo;

  if (direction !== "NONE") {
    switch (direction) {
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
    this.scores.innerHTML = parseInt(this.scores.innerHTML) + 5;
    const info = ctx.getImageData(x, y, 1, 1).data;
    const hex = getColorCode(info[0], info[1], info[2]);
    if (hex === ctx.fillStyle || x < 0 || y < 0) {
      window.alert("YOU LOSE");
      clearInterval(intervalID);
      ctx.clearRect(0, 0, 1000, 500);
      x = Literals.STARTING_COORD;
      y = Literals.STARTING_COORD;
      ctx.fillRect(x, y, 5, 5);
    } else {
      ctx.fillRect(x, y, 5, 5);
    }

    this.x = x;
    this.y = y;
  }
}

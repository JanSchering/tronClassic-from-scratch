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
  gameInfo.ctx.fillRect(x, y, 5, 5);
  const listener = addKeydownListener.bind(gameInfo);
  listener();
}

main();

//GAME FUNCTION
function onTimerTick() {
  let { direction, previousDirection } = this;
  const { ctx, intervalID } = gameInfo;
  console.log(this.x, this.y);

  if (direction !== "NONE") {
    switch (direction) {
      case "UP":
        this.y -= 5;
        break;
      case "DOWN":
        this.y += 5;
        break;
      case "LEFT":
        this.x -= 5;
        break;
      case "RIGHT":
        this.x += 5;
        break;
    }
    const info = ctx.getImageData(this.x, this.y, 1, 1).data;
    const hex = getColorCode(info[0], info[1], info[2]);
    if (hex === ctx.fillStyle || this.x < 0 || this.y < 0) {
      window.alert("YOU LOSE");
      clearInterval(intervalID);
      ctx.clearRect(0, 0, 1000, 500);
      this.x = Literals.STARTING_COORD;
      this.y = Literals.STARTING_COORD;
      ctx.fillRect(this.x, this.y, 5, 5);
    } else {
      ctx.fillRect(this.x, this.y, 5, 5);
    }
  }
}

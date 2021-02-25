import {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  NONE,
  GAME,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  STARTING_COORD,
  COLORS,
} from "./literals.js";
import { getColorCode } from "./utils.js";
import { init } from "./init.js";
import { addKeydownListener } from "./listeners.js";

let gameInfo = GAME;
gameInfo.onTimerTick = onTimerTick;

const initFunc = init.bind(gameInfo);

async function main() {
  await initFunc();
  const listener = addKeydownListener.bind(gameInfo);
  listener();
}

main();

//GAME FUNCTION
function onTimerTick() {
  let { player1, player2 } = this;
  const { ctx, intervalID } = gameInfo;
  const p1Color = COLORS[player1.color];
  const p2Color = COLORS[player2.color];

  player1 = movePlayer(player1);
  player2 = movePlayer(player2);

  if (
    !isAlive(player1, ctx, p1Color, p2Color) ||
    !isAlive(player2, ctx, p1Color, p2Color)
  ) {
    window.alert("YOU LOSE");
    restart(player1, player2, intervalID, ctx);
  } else {
    ctx.fillStyle = COLORS[player1.color];
    ctx.fillRect(player1.x_pos, player1.y_pos, 5, 5);
    ctx.fillStyle = COLORS[player2.color];
    ctx.fillRect(player2.x_pos, player2.y_pos, 5, 5);
  }

  this.player1 = player1;
  this.player2 = player2;
}

function movePlayer(player) {
  switch (player.direction) {
    case UP:
      player.y_pos -= 5;
      break;
    case DOWN:
      player.y_pos += 5;
      break;
    case LEFT:
      player.x_pos -= 5;
      break;
    case RIGHT:
      player.x_pos += 5;
      break;
    default:
      break;
  }
  return player;
}

function isAlive(player, ctx, color1, color2) {
  if (player.direction !== NONE) {
    const positionLookAhead = ctx.getImageData(player.x_pos, player.y_pos, 1, 1)
      .data;
    const hex = getColorCode(
      positionLookAhead[0],
      positionLookAhead[1],
      positionLookAhead[2]
    );
    return (
      !(hex === color1) &&
      !(hex === color2) &&
      player.x_pos >= 0 &&
      player.y_pos >= 0
    );
  } else {
    return true;
  }
}

function restart(player1, player2, intervalID, ctx) {
  clearInterval(intervalID);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player1.x_pos = STARTING_COORD;
  player1.y_pos = STARTING_COORD;
  player2.x_pos = STARTING_COORD;
  player2.y_pos = STARTING_COORD * 2;
  ctx.fillStyle = COLORS[player1.color];
  ctx.fillRect(player1.x_pos, player1.y_pos, 5, 5);
  ctx.fillStyle = COLORS[player2.color];
  ctx.fillRect(player2.x_pos, player2.y_pos, 5, 5);
}

const BASE = 150;

function createPlayer(name, idx) {
  return {
    name,
    x_pos: BASE,
    y_pos: BASE * idx,
  };
}

export function createPlayers(names) {
  let players = [];
  names.forEach((name, idx) => {
    players[idx] = createPlayer(name, idx);
  });
  return players;
}

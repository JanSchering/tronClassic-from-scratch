import * as Literals from "./literals.js";
import { createPlayers } from "./players.js";

export async function init() {
  const responses = new Promise((resolve, reject) => {
    // GET CANVAS AND INITIALIZE
    const canvas = document.getElementById("testCanvas");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "#FF0000";

    // CREATE INITIAL FORM
    const tmpContainer = document.createElement("div");
    tmpContainer.innerHTML = Literals.NAMEINPUT;
    const target = tmpContainer.childNodes[0];

    // APPEND INITIAL FORM TO DOM AND WAIT FOR PLAYER TO HIT ENTER
    document.querySelector("body").appendChild(target);
    document.getElementById("submit").addEventListener("click", () => {
      //CREATE PLAYERS
      const names = [];
      names.push(document.getElementById("name_1").value);
      names.push(document.getElementById("name_2").value);
      const players = createPlayers(names);
      this.player1 = players[0];
      document.getElementById("player1").textContent = this.player1.name;
      this.player2 = players[1];
      document.getElementById("player2").textContent = this.player2.name;
      target.parentNode.removeChild(target);
      this.ctx.fillRect(this.player1.x_pos, this.player1.y_pos, 5, 5);
      this.ctx.fillRect(this.player2.x_pos, this.player2.y_pos, 5, 5);
      resolve(this.ctx);
    });
  });
  return responses;
}

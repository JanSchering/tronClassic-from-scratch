import * as Literals from "./literals.js";
import { addKeydownListener } from "./listeners.js";

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
      target.parentNode.removeChild(target);
      this.ctx.fillRect(this.x, this.y, 5, 5);
      this.scores = document.getElementById("scores");
      resolve(this.ctx);
    });
  });
  return responses;
}

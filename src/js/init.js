import * as Literals from "./literals.js";
import { addKeydownListener } from "./listeners.js";

export async function init() {
  const responses = new Promise((resolve, reject) => {
    // GET CANVAS AND INITIALIZE
    const canvas = document.getElementById("testCanvas");
    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "#FF0000";

    const tmpContainer = document.createElement("div");
    tmpContainer.innerHTML = Literals.NAMEINPUT;
    const target = tmpContainer.childNodes[0];

    document.querySelector("body").appendChild(target);
    document.getElementById("submit").addEventListener("click", () => {
      console.log("clicked");
      target.parentNode.removeChild(target);
      resolve(this.ctx);
    });
  });
  return responses;
}

// LISTEN TO THE KEYSTROKES AND ADJUST ACCORDINGLY
export async function addKeydownListener() {
  document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    const prevDirection = this.direction;
    clearInterval(this.intervalID);
    const keyCode = event.keyCode;
    switch (keyCode) {
      case 38:
        if (prevDirection !== "DOWN") this.direction = "UP";
        break;
      case 40:
        if (prevDirection !== "UP") this.direction = "DOWN";
        break;
      case 39:
        if (prevDirection !== "LEFT") this.direction = "RIGHT";
        break;
      case 37:
        if (prevDirection !== "RIGHT") this.direction = "LEFT";
        break;
    }
    const boundHandler = this.onTimerTick.bind(this);
    this.intervalID = setInterval(boundHandler, 33);
  });
}

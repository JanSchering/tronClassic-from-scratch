const path = require("path");

module.exports = {
  entry: "./src/canvas.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

//make theme file
var d = require("dxl-builder");
console.log("builder loaded:");

//create colors.json
require("./src/build_colors.js");

//create theme file
require("./src/build_theme");

console.log("building done");
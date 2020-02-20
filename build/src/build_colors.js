var d = require("dxl-builder");
console.log("building 2_colors.json:");

//create colors.json
var colors = {};
colors = Object.assign(colors,d.JSON.read("themes/src/colors/bars_maps.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/editor.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/interactive.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/other.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/panels_tabs.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/settings.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/symbolicon.json"));
colors = Object.assign(colors,d.JSON.read("themes/src/colors/terminal.json"));
//write to 2_colors.json
d.JSON.write("themes/src/2_colors.json",{"colors":colors})
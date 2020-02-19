var d = require("dxl-builder");

//simply merge files
var theme = {};
theme = Object.assign(theme,d.JSON.read("themes/src/1_meta.json"));
theme = Object.assign(theme,d.JSON.read("themes/src/2_colors.json"));
theme = Object.assign(theme,d.JSON.read("themes/src/3_tokenColors.json"));

//then write 
d.JSON.write("themes/Night Cruise-color-theme.json",theme);

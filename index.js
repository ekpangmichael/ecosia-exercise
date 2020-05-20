const esm = require("esm")(module);
const app  = esm("./server.js");
module.exports = app;

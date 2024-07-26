const fs = require("fs");
const {VM,VMScript} = require("vm2");
var code = fs.readFileSync(`${__dirname}/d2.js`);
const script = new VMScript(code,`${__dirname}/调试ing.js`);
const vm = new VM();
debugger;
vm.run(script);
debugger;

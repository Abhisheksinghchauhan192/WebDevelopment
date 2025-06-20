
// const math = require("./math");

// console.log(math.sum(2,3));
// console.log(math.mul(3,3));


//now we can't use above cause now we have make the project 
// treat all .js file as ES module file(by adding type:module in package.json file ) and require 
// will not work we can makke it work using cjsmodule

// so do import or require in projects.. 


import {print} from "./importfile.js";

print("hello");


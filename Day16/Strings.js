// trim method to remove the whitespace from starting and ending both like in pythonn 
// Strings are immutable in javascript like python 
// all methods gives a new string.. 

console.log("   Hello   ".length);// 11 
console.log("   Hello   ".trim().length); // 5 


console.log("   Hello   ".toUpperCase());
console.log("   Hello   ".toLowerCase());


console.log("   Hello   ".trim().indexOf('l')); // 2
console.log("   Hello   ".trim().indexOf('s')); // -1 not found 

// slice method . just like slicing in python 

console.log("hello borther".slice(1,8));// ending is not enclusive.. 
console.log("hello".slice(1));// from 1 to last 
console.log("hello".slice(-2)); // same as .slice(string.length-2)

// replacing something in the string.. 
msg = "ILoveCoding"
console.log(msg);
console.log(msg.replace("Love","Do"));

//repeat method. 
console.log("Hello".repeat(3));











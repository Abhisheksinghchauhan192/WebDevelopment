
let arr = [1,2,2,4,5,6,7,8,5];

arr.forEach(print);
function print(el){
    console.log(el);
}

//2nd method to do so.. 
arr.forEach((el)=>{
    console.log(el);
});

// map function in js 

let double = arr.map((el)=>el*2);
double.forEach(print);

// filter function in js.. 
let evens = arr.filter((el)=>el%2==0);

for (ev of evens){
    console.log(ev);
}
//every method in js
// if every ele of array satisfy the condition then return true 
// else false. 

console.log(arr.every((el)=>el<10)); // true. but false if set 5 

// some function it is like logical or in array. 
console.log(arr.some((el)=>el<=1));

// reduce function 
// it reduce the array to a single value and take two args. 
// accumulator and element 

console.log(arr.reduce((res,el)=>res+el));// gives sum of the arr elements. 

// spread method.. 
// use to spread values of an iterable. 
let oldarr = [12,2,3,4,4];
let newarr = [...oldarr,77];// also adding 77 in the last after the old arr elements. 

console.log(newarr);
//using spread 
console.log(...newarr);
console.log(..."hello");
console.log(Math.min(...newarr));

let data = {
    email:"hello@gmail.com",
    password:"3232"
};

console.log(data);
let datacopy = {...data,id:123};
console.log(datacopy);
// making object of arrayh here the indcex becom the key for elements.
let obj = {...oldarr};
console.log(obj);
// assigning variable usihng spread. 

let [el1,el2] = [...oldarr];
console.log(el1,el2);

// concept or Rest in JS 
// it is opposite of Spread in js used to collect values in an array. 

function sum (...args){

    return args.reduce((res,el)=>res+el);
}

console.log(sum(3,4,5,56,6));

// el2obj employee the concept of rest.. 
let  [el1new,...el2obj] = [...oldarr];
console.log(el1new,el2obj);


// object destructuring.. 
let student = {
    name:"Abh",
    age:12,
    username:"Abhi@gmail.com",
    password:"23ds"
};

let {username: user,password,city="alm"}= student;

console.log(user,password,city);


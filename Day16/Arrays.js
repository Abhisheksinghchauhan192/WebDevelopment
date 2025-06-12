// Arrays in JavaScript.. 
let students = ["raj","piyush","bangali"];
console.log(students);


let more = ["rahul","sohan"];


// Array methods.. 
// it return a new array.. 
console.log(students.concat(more));

// change the original array.. 
console.log(students.reverse());

console.log(students);

// slice mehtod

console.log(students.slice(1,3)); // from second value to 3rd element.. 

console.log(students.slice(1));
// bring 2 element from the last.. 
console.log(students.slice(-2));

// splice method.. 

// can be used to replace , remove and add new item.. in the array... 

// slice(start,deletcount,item0... itme n )

// if only starting index is passed then it works as slice method.. 
// but it changes the original array.. 
console.log(students.splice(1)); // these are now deleted from the array. 

console.log(students);

// from index 0 delete 1 item then add sam and bahadur if more then add all of them.. 
students.splice(0,1,"sam","bahadur");

console.log(students);
 
// replacing a value . 

students.splice(1,1,"shruti");
console.log(students);

// sort() method only works well on strings. but 
// in the case of numbers it convert number to string then sort thus 
// we didn't get the expected sortingnn. 

console.log("Sort Method in js");
let days = ["monday","wednesday","thursday","sunday"];
days.sort();
console.log(days);

let nums = [100,23,55,-44,232];
nums.sort();
console.log(nums); // not as expected.. 



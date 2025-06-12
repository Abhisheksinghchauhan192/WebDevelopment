let student = {

    name : "Abhishek",
    Age:21,
    phy:98,
    math:99,
    it:90,
    // here this is refering to the current caller object.. 
    getavg(){
        return ((this.phy+this.math+this.it)/3);
    }
}

console.log(student.name,student.Age);
console.log(student.getavg());

console.log(this); // here it is refering to the window object. 
// eg - 

alert("I am an Alert");
// or we can also use 
window.alert("I am an Alert too!");




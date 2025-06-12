const student = {

    name:"Deepak",
    age:21,
    marks:55,
    prop:this,// here it is global scoped. 

    getName(){
        console.log(this);
        return this.name;
    },
    
    // here the this will be a window object and marks will be undefined 
    // cause arrow function is lexically scoped.. 
    
    getMarks:()=>{
        console.log(this);
        return this.marks;
    }
}

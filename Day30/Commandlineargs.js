
let args = process.argv;

for(items of args){

    console.log(items);
}

// first two value of argv is node executable path and current file path so 

for(let i = 2;i<args.length;i++){

    console.log("Hello and Welcome",args[i]);
}
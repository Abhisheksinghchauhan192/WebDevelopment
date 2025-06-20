// this file will act as our server.. 

const express = require("express"); // express is a method that will return a object which we will be using for the server side development.. 

const app = express(); // this is our object which we will use 
// console.dir(app);


const port = 3000;

app.listen(port,()=>{

    console.log(`App is listening in port - ${port}`);
})


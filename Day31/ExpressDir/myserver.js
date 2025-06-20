
const express = require("express");

const app = express();

//console.dir(app);

// let define a port 
const port = 3000;

app.listen(port,()=>{

    console.log("server is listening ");
});

// to accept request we can use use method wich return a response of the request 
// in string format or any object whetever you want 

// app.use("/",(req,res)=>{
    
//     res.send("Hi FROM THE SERVER ");

// });

// but use method will routes all the routes to the same response that is why we do not use it.. 
// we use 
// .get , .post methods.. 

// app.get("/Search",(req,res)=>{

//     res.send("<h1> Hi From Get Method </h1>");
// });

app.get("/home",(req,res)=>{

    res.send("<h1> Welcome to the home Page </h1>")
});

app.post("/root",(req,res)=>{

    res.send({

        name:"Abhishek Singh Chauhan",
        password:"3232dfkjsdk23/'44$",
    });
});

// to set a route to all the other routes we can use * wildcart

// app.get("*",(req,res)=>{

//     res.send("<h1> This Page Doen't Exits </h1>");
// });


// now how to get the parameters from the url using following methods.. 

// key : value 
// Path Parameters... 

app.get("/:username/:id",(req,res)=>{

    console.log(req.params);
    res.send(`<h1> Hello ${req.params.username} Your id is @${req.params.id}`);

});

// query string 
// send the data in the url like /search?q= apple & cat = red etc..... 
// this can be extracted from the urlll as folow 


app.get("/search",(req,res)=>{

    console.log(req.query);// this will return a object containing key values passed on url 

    res.send(`<h1>Your Searched for ${req.query.q}</h1>`);
})


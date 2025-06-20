const express = require("express");
const app = express();

// starting the server in port 3000 
app.listen(3000,()=>{
    console.log("listening on port 3000");
});

app.use(express.urlencoded({extended:true}));// work for every request cause of use 
app.use(express.json());// to parse json data on req body


app.get("/register",(req,res)=>{

    let {username,password} = req.query;
    res.send(`<h1> Standard Get Request Response  </h1>
              <h2> Welcome ${username} Your password is ${password}</h2>
        `);
});

app.post("/register",(req,res)=>{

    // req.body contain the post request data. 
    console.log(req.body); // epress do not directely understand it 
    // so we have to include a middleware app.use(express.urlextended({extended:true})); for it to work.. 
    let {username,password} = req.body;
    res.send(`<h1> Standard post Request Response </h1>
             <h2> Welcome  ${username} Your pass is - ${password} </h2>
        `);
});



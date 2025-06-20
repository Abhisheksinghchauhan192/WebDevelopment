const express = require("express");
const app = express();
const path = require("path");

app.listen(3000,()=>{

    console.log("listening ..... ");
});

// we have to set the view engine to templatinig which is ejs

app.set("view engine","ejs");
// and these templates are default in a directory named views 


app.get("/",(req,res)=>{

    res.render("home.ejs");
});

// Note : when you will try to run the server from different directory then these templates will not be located so trows erros to handle this 
// we need to include path to set the path for the ejs templates.. 

app.set("views",path.join(__dirname,"/views"));// now it will work 
// note __dirname is showing the direcory of our server.js file which we are running. 

// showing the data on our template whhich is coming form db

app.get("/random",(req,res)=>{

    // let the data get from db is 
    let data  = {name:"Abhishek",age:21} ;
    res.render("random.ejs",data);
});

// making a instagram page template basic on the routn /instagram

app.get("/inst/:user",(req,res)=>{
    let followers = ['adam','john','eva','ronald'];
    let name = req.params.user;
    res.render("instagram.ejs",{name,followers});
});





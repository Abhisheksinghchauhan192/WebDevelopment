const express = require("express");
const app = express();
const path = require("path");
// package for unique ids.. uuid 

const {v4:uuidv4} = require("uuid");
// using method overrid package to override the method 
// basically to use patch , put and delete if client doen't 
// support it . 

const methodOverrid = require("method-override");
app.use(methodOverrid("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

// middlewaer parsing of request.. 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// to simulate the data from the database let's take an 
// array of objects now.. 
let posts = [
    
    {
        id:uuidv4(),
        username:"Abhisehk singh Chauhan",
        content:"Learning web Development and finding it awesome"
    },

    {
        id:uuidv4(),
        username:"ChauhanJi",
        content:"Learning is Lifelong !!!!! "
    },
    
    {
        id:uuidv4(),
        username:"Abhi Chauhan",
        content:"Yeah i got my first Internship ...!!!!! "
    },
    

];


app.listen(3000,()=>{

    console.log("Server Started");
});


app.get("/",(req,res)=>{

    res.send("Server is Working Fine ");

});


//implementing the index route of our service.. 
// following REST FUll Approch.. 

app.get("/posts",(req,res)=>{

    res.render("index.ejs",{posts});
});

// to send data to the server.. this route is used..
// used to add new posts in the database web service .. 
// we will do it in two step 
// first we will route to new api which will get the post data in a form 
// then we will post it from there to this route.. 
app.get("/posts/new",(req,res)=>{

    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{

    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // redirecting to the posts page after adding it.. 
    res.redirect("/posts");
});

// implementin an api route which will return the data of a
//specific post. 

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    // get the data of the post of id 
    let post = posts.find((p)=> p.id == id);
    res.render("show.ejs",{post});

});


// now implementing patch api 
// it will be in two step as we get request for edit 
// we route user to /posts/:id/edit to fill up a form then 
// as user submit it we call the patch 
// and after updating the data we redirect user to the main posts page 

app.get("/posts/:id/edit",(req,res)=>{

    let id = req.params.id;
    let post = posts.find((p)=>p.id == id);
    res.render("edit.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let newcontent = req.body.content;
    // console.log(newcontent);
    // finding the post with id id 
    let post = posts.find((p) => p.id == id);
    post.content = newcontent;
    res.redirect("/posts");
});

// implementing the delete api

app.delete("/posts/:id",(req,res)=>{

    let id = req.params.id;
    posts = posts.filter((p)=>p.id !== id);
    res.redirect("/posts");
})


const express = require('express');
const path = require('path');
const app = express();
const mysql = require("mysql2");
const methodOverride = require('method-override');
const { connect } = require('http2');

// settingthe viewing engine for express
app.set("view engine","ejs");
// setting path for views.
app.set("views",path.join(__dirname,"/views"));

// encoding data from the url and json send by client
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// using method override package to override the methods of the 
// form field 
app.use(methodOverride("_method"));
// set the paths for the static files 
app.use(express.static(path.join(__dirname,'/public')));

const connection = mysql.createConnection({

    host:'localhost',
    database:'tests',
    user:'TestUser',
    password:'Mysql@123',

});

// let q = 'SHOW TABLES';
// try{

//     connection.query(q,(err,results,fields)=>{
//          if(err)throw err;
//         console.log(results);
//     })
// }catch(err){

//     console.log(err);
// }

app.listen(3000,()=>{

    console.log("server has started listening");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// router to add dat in the database. 

app.get("/users/add",(req,res)=>{
    res.render("add.ejs");
});

app.post("/users/add",(req,res)=>{
    // add the data recieved from the form to the database.
    let getdata = req.body;
    let data = Array.from(Object.values(getdata));
    // console.log(data);

    try{
        let q = `insert into users (id,username,email,password) values (?,?,?,?)`;
        connection.query(q,data,(err,result)=>{

            if(err)throw err;
            res.redirect("/users?success=true&action=created");
        })
    }catch(err){
        res.send("Something Went Wrong Please try again");
    }

});


// route to show the data..

app.get("/users",(req,res)=>{
    const successMessage = req.query.success ? "User  successfully registered!" : null;
    let q = 'SELECT id,username,email FROM users';
    try{
        connection.query(q,(err,results)=>{
            if(err)throw err
            let users = results;
            res.render("users.ejs", { successMessage,users });
        })
    }catch(err){
        res.send("Couldn't get data From the Database");
    }

});

app.patch("/users/:id",(req,res)=>{
    let id = req.params.id;
    // get the data of the user from the database. 
    // and then match the password filled int he edti username form 
    // then varify it if all good go ahead and make changes in data base send done msg
    // else send wrong password.

    try{

        connection.query(`select password from users where id = '${id}' `,(err,results)=>{

            if(err)throw err;
            let user = results[0];
            let editreq = req.body;

            let originalPassword = user.password;
            let filledPassword = editreq.password;
            let newUserName = editreq.username;

            if(originalPassword === filledPassword){

                // send the update request to the database.
                try{
                    
                    let q = `update users set username = '${newUserName}' where id = '${id}'`;

                    connection.query(q,(err,result)=>{
                        if(err)throw err;
                        res.redirect("/users?success=true&action=updated");                    })
                }catch(er){
                    res.send("DataBase Error .<br> could not update the username <br> Try Again after sometime");
                }
            }
            else{
                res.send("<h2> Wrong Password </h2> <br> <h4> username not changed </h4>");
            }

        })
    }catch(err){
        res.send("Some internal Error Occurs Please Try Again ..");
    }
});

app.get("/users/:id",(req,res)=>{

    let id = req.params.id;
    try{
        connection.query(`select id,username from users where id ='${id}'`,(err,results)=>{

            if(err)throw err;
            let user = results[0];
            // console.log(user);
            res.render("edituser.ejs",{user});
        })
    }catch(err){
        res.send("Erroe Getting Data of user");
    }
    

});

// route for deleting a user from the database..
// we will do it in two steps 
// 1 - wi will send the user to  a page where he will fill deletion form 
// 2 - then if all good delete the user else not.
// listtening for post on "/users/:id" will be the route for deletion 
app.post("/users/:id",(req,res)=>{
    let userid = req.params.id
    res.render("delete.ejs",{userid});
});

app.delete("/users/:id",(req,res)=>{
    // get the id of the user to fetch it's data from teh database.. 
    let id = req.params.id;
    // varify password and email to delete the user. 
    try{

        let q = `select email,password from users where id=?`;
        connection.query(q,[id],(err,results)=>{

            if(err)throw err;

            let userdata = results[0];
            // console.log(userdata);
            // console.log(req.body);

            // get the data filled on the form.
            let {email:filledEmail,password:filledPassword} = req.body;
            let {email:originalEmail,password:originalPassword} = userdata;

            if(filledEmail === originalEmail && filledPassword === originalPassword){
                // go ahead and delete from the database. 
                try{
                    
                    connection.query(`delete from users where id =?`,[id],(err,result)=>{

                        res.redirect("/users?success=true&action=deleted");
                    })
                }catch(err){

                    res.send("Some Error While Deleting your data Please Try again..");
                }
            }
            else{
                res.send("Wrong Credentials");
            }
        })
    }catch(err){
        res.send("Something Went Wrong Please Try again...");
    }

});


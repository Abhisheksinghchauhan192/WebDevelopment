// we will first look at without the promises what the flow of code look like 
// Try to save a Data to dataBase (just logically will use printstmt here) and if it 
// get succefully saved then saved next Data then next 
// if any one fail we will not printstmt failure to save data that is it is a simple task 
// but look at it without the Promises how it look like 


function savetoDb(data,success,failure){

    let netspeed  = Math.floor(Math.random()*11);
    if(netspeed>4){
        success(data);
    }
    else{
        failure();
    }

}


savetoDb("Data1",()=>{
    console.log("Success: Data1 saved Succefully ");
    savetoDb("Date2",()=>{
        
        console.log("Success: Data2 saved Succefully ");
        savetoDb("Data3",()=>{

            console.log("Success: Data3 saved Succefully ");
        },
    ()=>{

        console.log("Failure: Internet Speed is Slow");
    })
    },    ()=>{
        
        console.log("Failure: Internet Speed is Slow");
    })

},
()=>{
    console.log("Failure: Internet Speed is Slow");
}
);


// this is how the code look so messy and confusing now solving this problem witht the help of Promises.. 


function savetoDb2(Data){

    return new Promise((resolve,reject)=>{

        let netspeed = Math.floor(Math.random()*11);
    
        if(netspeed>4){
            resolve("Success: Data was saved");
        }
        else{
            reject("Failure : Weak Connection ...");
        }

    });
}

let request = savetoDb2("newData1"); // a promis object that was returned
// we can set this then and catch directely on function 

request.then(()=>{
    console.log("Promise was resolved");
    console.log(request);
}).catch(()=>{
    console.log("Promis was rejected ");
})

// but how we do multiple datasaving operatoin we Use Promise Chaining.

savetoDb2("newData1").then(()=>{
    console.log("Data Saved Succefully");
    return savetoDb2("newData2");
}).then(()=>{
    
    console.log("Data Saved Succefully");
    return savetoDb2("newData3");
}).then(
    ()=>{
    console.log("Data Saved Succefully");
    }    
).catch(()=>{
    console.log("Some Promises Rejected");
});


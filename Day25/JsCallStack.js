function outer(){

    console.log("Inside Outer Function ");
    function inner(){
        console.log("Inside Innner Function ");

        // following goes in the callback queue so it will 
        // be last cause of the EventLoop but it synchoronously 
        //executed and callStack empty te inner() function 
        // the outer is called 
        // then after timer inner annoymouse function come to CallStack and it is executed 

        setTimeout(() => {
            console.log("exitign Inner's callback annoymouse function");
            
        }, 1000);


    }
    inner();
    console.log("Inside Outer Function Again");
}

outer();


// Another example of callstack 

function one (){
    console.log("inside 1");
    return 1;

}
function two(){
    console.log("inside 2");
    return one()+one();
}

function three(){
    console.log("inside 3");
    let total = two()+one();
    console.log("Total ",total);
}

three();
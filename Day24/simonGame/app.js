let colors = ["red","yellow","green","pink"];
let userSeq = [];// track the user entered seq . of colors.
let maxScore = 0;

// objects for printing the game state. 
let msg   = document.querySelector("#status #msg");
let status = document.querySelector("#status #level");

gameSeq = []; // this will contain the game sequence to be varified with user sequence. 

// function for flashing the box.. 
function flash(box,color="white"){
    let original = box.id;
    // console.log(original,"color flased ");
    box.style.backgroundColor = `${color}`;
    setTimeout(() => {
        box.style.backgroundColor = `${original}`;
    }, 200);
}

let isStarted = false;
// select body and set an even if any key press start the game . 
let level = 0;// track the level of the game as well the score.. 

function selectBox(){
    
    let randomIndex = Math.floor(Math.random()*4);
    let boxid =  colors[randomIndex];
    gameSeq.push(boxid);
    return document.querySelector(`#${boxid}`);
}



// for updating the status of the game. 
function updateStatus(str1,str2){

    msg.innerHTML = `${str2}`;
    status.innerHTML = `${str1}`;
}


let body = document.querySelector("body");
body.addEventListener("keydown",()=>{
    
    if(!isStarted){   
        isStarted = true;
        // console.log("game Started");
        // call levelUp method which will select a box 
        // and level up by 1 
        levelUp();
    }

    
});


function levelUp(){
    userSeq = []
    level++;
    let randomBox = selectBox();
    updateStatus(`<b>Level : ${level} </b>`,"");
    flash(randomBox);
    // console.log("gameseq ->",gameSeq);
    
}

// now we have to add the functionality of the pressing the color 
// which was flashed when game started 
function colorflash(){

    if(isStarted){
        let choice = this.id;
        // console.log(`Selected : ${choice}`);
        flash(this,"skyblue");
        userSeq.push(choice);
        checkAnswer(userSeq.length-1);
    }

}

function checkAnswer(ind){
    
    if(userSeq[ind] === gameSeq[ind]){
        //here can be two cases if it is the last element we checking 
        // on the level then just simply levelUp for next level
        // console.log("Selected Correct Color.");
        if(userSeq.length === gameSeq.length){
            // console.log("Moving To New Level");
            // add a little delay to going to next level
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        // console.log("Game Over");
        // blinking he whole background as red for 80 ms
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor ="white";
        }, 80);
        maxScore = Math.max(level-1,maxScore);
        if(maxScore){
            let setMaxScore = document.querySelector("#maxScore");
            setMaxScore.innerHTML = `MaxScore : ${maxScore}`;
        }
        updateStatus("Press Any Key TO Start The Game !",`<b>Game Over !</b> <br>Your Current Score was ${level-1}`);
        resetGame();
    }
    
}

let  colorbox = document.querySelectorAll(".colorbox");
for(let color of colorbox){
    color.addEventListener("click",colorflash);
}

function resetGame(){
    
    isStarted = false;
    level = 0;
    gameSeq = [];
    userSeq=[];
}


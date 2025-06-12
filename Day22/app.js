
let body = document.querySelector("body");

// ad a para which is red
let para = document.createElement("p");
para.innerText = "Hey I am red";
para.style.color = "red";
body.append(para);

// add a blue h3
let blueh3 = document.createElement("h3");
blueh3.innerText = "Hey I am Blue H3 ";
blueh3.style.color = "blue";
body.append(blueh3);

// add a div with black border and pink background
// and containing h1 - says i am in div 
// and a p say - i am in div too !

let div = document.createElement("div");
let h1indiv = document.createElement("h1");
h1indiv.innerText = " Hey I am in Div";
div.appendChild(h1indiv);
let pindiv = document.createElement('p');
pindiv.innerText = "I am in Div too !";
div.appendChild(pindiv);
div.style.backgroundColor = "pink";
div.style.border = "black solid";
// or 
// div.setAttribute("style","border:black solid; background-color:pink");

body.append(div);


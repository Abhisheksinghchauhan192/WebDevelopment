
let input = document.createElement("input");
input.type = "text";
input.placeholder = "username";
let btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.id= "btn"

let body = document.querySelector("body");
body.append(input);
body.append(btn);

let b = document.querySelector("#btn");
b.style.backgroundColor = "blue";
b.style.color = "white";

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
body.prepend(h1);
h1.style.color = "purple";

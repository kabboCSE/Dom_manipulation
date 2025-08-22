// create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "This is me";

//find the parent where you will add the child

// const playerList = document.getElementById("players-container");
const playerList = document.getElementById("player-list");

// append the child to the parent
playerList.appendChild(newChild);

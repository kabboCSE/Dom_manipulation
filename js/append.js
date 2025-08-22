// 1. Parent node
const mainContainer = document.getElementById("main-container");

// 2. Create ChildNote

const placeSection = document.createElement("section");

//

mainContainer.appendChild(placeSection);

const h1 = document.createElement("h1");
h1.innerText = "This is new Heading!";

placeSection.appendChild(h1);

const newP = document.createElement("p");
newP.innerText = "This is List Items : ";
placeSection.appendChild(newP);

const li1 = document.createElement("li");
li1.innerText = "This is new li";

const li2 = document.createElement("li");
li2.innerText = "This is 2nd li";

const createOL = document.createElement("ol");

createOL.appendChild(li1);
createOL.appendChild(li2);

placeSection.appendChild(createOL);

//easier to create HTML
const bookSection = document.createElement("div");

bookSection.innerHTML = `
<h1> Books list </h1>
<ol>
<li>Physics</li>
<li>Chemistry</li>
<li>Biology</li>
<li>ICT</li>
`;

mainContainer.appendChild(bookSection);

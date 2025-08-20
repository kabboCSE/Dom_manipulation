console.log("Hey There!!");
console.log(document);
const student = {
  name: "kabbo",
  id: 21,
  study: function (sub) {
    console.log("studing sub", sub);
  },
};

const heading = document.getElementsByTagName("h1");
console.log(heading);
for (const head of heading) {
  console.log(head.innerText);
}

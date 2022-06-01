// const pargraf1 = document.getElementById("p1");
// pargraf1.innerText = "hei there";
// pargraf1.style.backgroundColor = 'orange';

// const pargraf2 = document.getElementsByName("p2");
// pargraf2[0].style.backgroundColor = 'blue';
// pargraf2[1].style.backgroundColor = 'yellow';

// let button1 = document.getElementById("button1");
// let paragraf = document.getElementById("p1");
// let color;

// button1.onclick = function () {
//   alert("button 1 clicked");
//   if (color === "yellow") {
//     paragraf.style.backgroundColor = "white";
//     color = 'white';
//   } else {
//     paragraf.style.backgroundColor = "yellow";
//     color = 'yellow';
//   }
//   //   paragraf.style.backgroundColor = "yellow";
// };

// let button2 = document.getElementById("button2");
// button2.addEventListener("click", () => {
//   alert("button 2 clicked");
//   paragraf.style.backgroundColor = "red";
// });

const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1");
// let newElement = document.createElement("div");
// newElement.innerText = "New Element";

let tempId = 2;
button.onclick = function () {
  const parent = document.getElementById("wrapper");
  let clonedElement = paragraf1.cloneNode(true);
  clonedElement.id = "p"+tempId;
  parent.append(clonedElement);
  ++tempId;
  //   let clonedElement = parent.append(newElement);
};

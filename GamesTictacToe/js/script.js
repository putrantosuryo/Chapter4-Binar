const cross = "cross";
const circle = "circle";

const boxElements = document.querySelectorAll(".box");

let turnCross = true;
let turn = "";

startGame();

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function handleClick(e) {
  const boxTarget = e.target;
  if(turnCross==true){
    turn = cross;
  }else{
    turn = circle;
  }
  placeMark(boxTarget, turn);
  changeTurn(turn)
}


function changeTurn(turn){
  if(turn==cross){
    turnCross = false;
  }else{
    turnCross = true;
  }
}

function startGame() {
  let i = 1;
  boxElements.forEach((box) => {
    box.addEventListener("click", handleClick, { once: true });
    box.classList.add("box"+i);
    i++;
  });
}

function restartGame() {
  boxElements.forEach((box) => {
    box.classList.remove(cross);
    box.classList.remove(circle);
  });
  startGame();
  turnCross = true;
}

// function checkWinner(winner){
//   if()
// }




const cross = "Cross";
const circle = "Circle";

const boxElements = document.querySelectorAll(".box");
const resultElement = document.querySelector('.result')
let turnCross = true;
let turn = "";

startGame();

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
  document.getElementById(box.classList[1]).value = currentClass;
 
}

function handleClick(e) {
  const boxTarget = e.target;
  if(turnCross==true){
    turn = cross;
  }else{
    turn = circle;
  }
  placeMark(boxTarget, turn);
  changeTurn(turn);

  checkWinner(turn);
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
    box.innerHTML += "<input hidden id='box"+i+"' value=''>"
    i++;
  });
}

function restartGame() {
  boxElements.forEach((box) => {
    box.classList.remove(cross);
    box.classList.remove(circle);
    box.innerHTML ='';
  });
  resultElement.classList.remove('result'+cross)
  resultElement.classList.remove('result'+circle)
  startGame();
  turnCross = true;
}

function checkWinner(player){
  const tempContainer = new Map();
  let boxName = "";
  let boxValue = "";
  boxElements.forEach((box) => {
    boxName = box.classList[1].toString();
    boxValue = document.getElementById(box.classList[1]).value;
    tempContainer.set(boxName,boxValue);
  });

 //box 123
  if(tempContainer.get("box1") == player && tempContainer.get("box2") == player && tempContainer.get("box3")== player )resultElement.classList.add('result'+player)
 //box 456
  if(tempContainer.get("box4") == player && tempContainer.get("box5") == player && tempContainer.get("box6")== player )resultElement.classList.add('result'+player)
 //box 789
  if(tempContainer.get("box7") == player && tempContainer.get("box8") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player)
 //box 147
  if(tempContainer.get("box1") == player && tempContainer.get("box4") == player && tempContainer.get("box7")== player )resultElement.classList.add('result'+player)
 //box 258
  if(tempContainer.get("box2") == player && tempContainer.get("box5") == player && tempContainer.get("box8")== player )resultElement.classList.add('result'+player)
  //box 369
  if(tempContainer.get("box3") == player && tempContainer.get("box6") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player)
  //box 159
  if(tempContainer.get("box1") == player && tempContainer.get("box5") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player)
  //box 357
  if(tempContainer.get("box3") == player && tempContainer.get("box5") == player && tempContainer.get("box7")== player )resultElement.classList.add('result'+player)
}




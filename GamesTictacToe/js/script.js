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
    box.classList.remove(cross,circle,'disabled');
    // box.classList.remove(circle);
    box.innerHTML ='';
  });
  resultElement.classList.remove('result'+cross,'result'+circle,'resultDraw')
  startGame();
  turnCross = true;
}

function disabledAll(){
  boxElements.forEach((box) => {
    box.classList.add("disabled");
    box.removeEventListener("click",handleClick);
  });
}

function checkWinner(player){
  const tempContainer = new Map();
  let boxName = "";
  let boxValue = "";
  let isDone = true;
  boxElements.forEach((box) => {
  
    boxName = box.classList[1].toString();
    boxValue = document.getElementById(box.classList[1]).value;
    if(boxValue == '')isDone =false;
    tempContainer.set(boxName,boxValue);
  });

if(!isDone){
  //box 123
  if(tempContainer.get("box1") == player && tempContainer.get("box2") == player && tempContainer.get("box3")== player )resultElement.classList.add('result'+player),disabledAll();
 //box 456
  else if(tempContainer.get("box4") == player && tempContainer.get("box5") == player && tempContainer.get("box6")== player )resultElement.classList.add('result'+player),disabledAll();
 //box 789
  else if(tempContainer.get("box7") == player && tempContainer.get("box8") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player),disabledAll();
 //box 147
  else if(tempContainer.get("box1") == player && tempContainer.get("box4") == player && tempContainer.get("box7")== player )resultElement.classList.add('result'+player),disabledAll();
 //box 258
  else if(tempContainer.get("box2") == player && tempContainer.get("box5") == player && tempContainer.get("box8")== player )resultElement.classList.add('result'+player),disabledAll();
  //box 369
  else if(tempContainer.get("box3") == player && tempContainer.get("box6") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player),disabledAll();
  //box 159
  else if(tempContainer.get("box1") == player && tempContainer.get("box5") == player && tempContainer.get("box9")== player )resultElement.classList.add('result'+player),disabledAll();
  //box 357
  else if(tempContainer.get("box3") == player && tempContainer.get("box5") == player && tempContainer.get("box7")== player )resultElement.classList.add('result'+player),disabledAll();
}else{
  resultElement.classList.add('resultDraw'),disabledAll();
}

}




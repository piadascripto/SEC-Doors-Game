let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let garyDoorPath = 'https://i.imgur.com/JIAy4qt.png';
let upDoorPath = 'https://i.imgur.com/GW2uxGT.png';
let closedDoorPath = 'https://i.imgur.com/zKBuZz2.png';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

function isClicked(door) {
  return door.src === closedDoorPath;
}

function isGary(door) {
  if (door.src === garyDoorPath){
   return true 
  }
}

function gameOver(status) {
  if (status === "win") {
    startButton.textContent = "There is no way out! Gary sued you";
  } else {
    startButton.textContent = "Gary sued you! Play again?";
  }
  currentlyPlaying = false;
}

function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isGary(door)){
    gameOver();
  }
}

function randomChoreDoorGenerator() {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = garyDoorPath;
    openDoor2 = upDoorPath;
    openDoor3 = upDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = upDoorPath;
    openDoor2 = garyDoorPath;
    openDoor3 = upDoorPath;
  } else {
    openDoor1 = upDoorPath;
    openDoor2 = upDoorPath;
    openDoor3 = garyDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.textContent = "Good luck!";
  randomChoreDoorGenerator();
}

startRound();


let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

var card;

const cardBlue = document.getElementById("cardBlue");
const cardYellow = document.getElementById("cardYellow");

cardBlue.addEventListener("mousedown", mouseBlueDown);
cardYellow.addEventListener("mousedown", mouseYellowDown);



// Down Function (starts when the mouse is pressed down)

//Blue card
function mouseBlueDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  
  document.addEventListener("mousemove", mouseBlueMove);
  document.addEventListener("mouseup", mouseBlueUp);
  cardBlue.classList.add("wobble-hor-bottom");
}

//Yellow card
function mouseYellowDown(e) {
  startX = e.clientX;
  startY = e.clientY;
  
  document.addEventListener("mousemove", mouseYellowMove);
  document.addEventListener("mouseup", mouseYellowUp);
  cardYellow.classList.add("wobble-hor-bottom");
}



// Move Function (starts on mouse move)

// Blue card
function mouseBlueMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  cardBlue.style.top = cardBlue.offsetTop - newY + "px";
  cardBlue.style.left = cardBlue.offsetLeft - newX + "px";
}

//Yellow card
function mouseYellowMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  cardYellow.style.top = cardYellow.offsetTop - newY + "px";
  cardYellow.style.left = cardYellow.offsetLeft - newX + "px";
}


//Up function (starts when the mouse is depressed)

//Blue card
function mouseBlueUp(e) {
  document.removeEventListener("mousemove", mouseBlueMove);
  cardBlue.classList.remove("wobble-hor-bottom");
}

//Yellow card
function mouseYellowUp(e) {
  document.removeEventListener("mousemove", mouseYellowMove);
  cardYellow.classList.remove("wobble-hor-bottom");
}



//Lock pic (when the user drags the card from the picture)
document.getElementById("profile_pic").setAttribute("draggable", false);


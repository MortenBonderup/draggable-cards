let newX = 0,
    newY = 0,
    startX = 0,
    startY = 0,
    accX = 0,
    accY= 0;

// "cards" is an object with existing cards
// listed in key:value pairs.    
const cards = {
    cardBlue: document.getElementById("cardBlue"),
    cardYellow: document.getElementById("cardYellow"),
    cardGreen: document.getElementById("cardGreen")
    // Add new cards here (separated with commas). Then, 
    // there is nothing more to do - the script takes
    // care of the rest :-)
};

// Reads the keys of the cards and attach an
// eventlistener "mousedown" to all the existing cards.
Object.keys(cards).forEach(cardId => {
    const card = cards[cardId]; // cardId values = "cardBlue" or "CardYellow"
    card.addEventListener("mousedown", (e) => mouseDown(e, card));
    
    // Positioning of the cards - every card is moved 10 pixels to the 
    // right and 10 pixels to the bottom, but the first card which starts
    // in zero.
    const currentLeft = parseInt(window.getComputedStyle(card).left, 10);
    const currentTop = parseInt(window.getComputedStyle(card).top, 10);
    card.style.left = (currentLeft + accX) + 'px';
    card.style.top = (currentTop + accY) + 'px';
    accX=accX+10;
    accY=accY+10;
});

// Eventhandler for the user selected card
function mouseDown(e, card) {
    startX = e.clientX;
    startY = e.clientY;

    // Calls the eventhandler with "e" and the user selected card
    const mouseMove = (e) => mouseMoveHandler(e, card);
    const mouseUp = () => mouseUpHandler(mouseMove, card);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    card.classList.add("wobble-hor-bottom");
}

// Set the top and left position of the user selected card
function mouseMoveHandler(e, card) {
    if (e.clientX !== startX || e.clientY !== startY) {
        newX = startX - e.clientX;
        newY = startY - e.clientY;

        startX = e.clientX;
        startY = e.clientY;

        card.style.top = card.offsetTop - newY + "px";
        card.style.left = card.offsetLeft - newX + "px";
    }
}

// When mouseup -> remove the mousemove eventlistener from
// the user selected card. Remove the CSS wobble-hor-bottom class for 
// this specific card also.
function mouseUpHandler(mouseMove, card) {
    document.removeEventListener("mousemove", mouseMove);
    card.classList.remove("wobble-hor-bottom");
}

document.getElementById("profile_pic").setAttribute("draggable", false);


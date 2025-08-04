// Constants
const MAX_LENGTH = 100;
const MIN_LENGTH = 10;

// Grid methods
function drawGrid(sideLength = 16) {
    const container = document.querySelector(".container");
    
    for (let i = 0; i < sideLength; i++) {
        container.appendChild(createRow(sideLength));
    } 
}

function resetGrid() {
    const container = document.querySelector(".container");

    let child = container.lastChild;
    while (child) {
        container.removeChild(child);
        child = container.lastChild;
    }
}

function createNewGrid() {
    resetGrid();
    const sideLength = promptLength();
    drawGrid(sideLength);
}

function createRow(sideLength) {
    const row = document.createElement("div");
    row.classList.add("row");

    row.style.display = "flex";

    for (let i = 0; i < sideLength; i++) {
        row.appendChild(createSquare(sideLength));
    }

    return row;
}

function createSquare(sideLength) {
    // Height is used instead so that it can fit vertically
    const calculateWidth = sideLength => (100 / sideLength) + "%";
    
    const square = document.createElement("div");
    square.classList.add("square");


    const width = calculateWidth(sideLength);
    square.style.backgroundColor = "rgb(201, 201, 201)";
    square.style.width = width;
    square.style.aspectRatio = "1 / 1";

    square.onmouseenter = () => square.style.backgroundColor = "grey";    

    return square;
}

function promptLength() {
    let sideLength = prompt("Enter the squares per side for the new grid: ");

    if (sideLength > MAX_LENGTH) {
        sideLength = MAX_LENGTH;
    } else if (sideLength < MIN_LENGTH) {
        sideLength = MIN_LENGTH;
    } 
    return sideLength;
}

// Event
const button = document.querySelector("button");
button.onclick = () => createNewGrid();

drawGrid();

// Constants
const MAX_LENGTH = 100;
const MIN_LENGTH = 4;
const DEF_LENGTH = 16;

// Grid methods
function resetGrid() {
    const container = document.querySelector(".container");

    let child = container.lastChild;
    while (child) {
        container.removeChild(child);
        child = container.lastChild;
    }
}

function createNewGrid(colorMethod) {
    resetGrid();
    const sideLength = promptLength();
    drawGrid(colorMethod, sideLength);
}

function drawGrid(colorMethod, sideLength = DEF_LENGTH) {
    const container = document.querySelector(".container");
    
    for (let i = 0; i < sideLength; i++) {
        container.appendChild(createRow(colorMethod, sideLength));
    } 
}

function createRow(colorMethod, sideLength) {
    const row = document.createElement("div");
    row.classList.add("row");

    row.style.backgroundColor = 'inherit';
    row.style.display = "flex";

    for (let i = 0; i < sideLength; i++) {
        row.appendChild(createSquare(colorMethod, sideLength));
    }

    return row;
}

function createSquare(colorMethod, sideLength) {
    // Height is used instead so that it can fit vertically
    const calculateWidth = sideLength => (100 / sideLength) + "%";

    const square = document.createElement("div");
    square.classList.add("square");

    const width = calculateWidth(sideLength);
    square.style.backgroundColor = "inherit";
    square.style.width = width;
    square.style.aspectRatio = "1 / 1";

    square.onmouseenter = () => colorMethod(square);

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

// Color Methods
const defaultColor = (square) => {
    square.style.backgroundColor = "grey";
};

const rainbowColor = (square) => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

const darkenColor = (square) => {
    if (!square.style.opacity) {
        square.style.backgroundColor = "rgb(64, 64, 64)";
        square.style.opacity = "0.0";
    } else {
        const opacity = Number(square.style.opacity);
        square.style.opacity = `${opacity + 0.1}`; 
    }
};

// Events
const promptButton = document.querySelector("#prompt");
promptButton.onclick = () => createNewGrid(defaultColor);

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.onclick = () => createNewGrid(rainbowColor);

const darkenButton = document.querySelector("#darken");
darkenButton.onclick = () => createNewGrid(darkenColor);

drawGrid(defaultColor);
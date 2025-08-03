const drawGrid = () => {
    const container = document.querySelector(".container");
    
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.flexWrap = "wrap";

    const NUM_DIVS = 16;
    for (let i = 0; i < NUM_DIVS; i++) {
        container.appendChild(createSquare());
    } 
}

const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add("square");

    // Style
    square.style.width = "24vw";
    square.style.height = "24vw";

    // Events
    square.onmouseenter = () => square.style.backgroundColor = "grey";
    square.onmouseleave = () => square.style.backgroundColor = "white";
    
    return square;
};

drawGrid();
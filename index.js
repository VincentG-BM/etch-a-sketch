const reset = document.querySelector('button');


function createGrid(index) {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${index}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${index}, 1fr)`;
    for (i = 0; i < index * index; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('pointerover', addRGB)
        container.appendChild(box);
    }
}


createGrid(16);

function addRGB(e) {
    e.target.style = `background-color:
    rgb(${Math.floor(Math.random() *
        256)},${Math.floor(Math.random() *
            256)},${Math.floor(Math.random() * 256)})`;
    e.target.removeEventListener('pointerover', addRGB);
}


function resetGrid() {
    let input = prompt("Please enter a new number for your grid.");
    if (input === undefined || input === null || input === "") {
        return;
    }

    while (input > 100 || input < 1) {
        input = prompt("Entered number is out of range. Please enter a number between 1 and 100.")
    }

    const container = document.querySelector('#container');
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(input);
    let grid = document.querySelectorAll('.grid');
    grid.forEach(gridBox => {
        gridBox.addEventListener('pointerover', () => {
            gridBox.style.backgroundColor = null;
        })
    });

};

let gridAmount = 16;
createGrid(gridAmount);
let grid = document.querySelectorAll('.grid');
grid.forEach(gridBox => {
    gridBox.addEventListener('pointerover', addRGB);
});

const newGrid = document.querySelector('#new-grid');

newGrid.addEventListener("click", resetGrid);

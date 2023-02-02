const gridContainer = document.getElementById('gridContainer');
gridContainer.style.display = 'grid';
const buttons = document.getElementById('buttons');
const sizingButton = document.createElement('button');
sizingButton.textContent = "Brush Size";
buttons.appendChild(sizingButton);
const rgbButton = document.createElement('button');
rgbButton.textContent = "Rainbow Mode";
buttons.appendChild(rgbButton);
const blackButton = document.createElement('button');
blackButton.textContent = "Black";
buttons.appendChild(blackButton);
let lineColor = 'black'
let hasBeenClicked = false;

function makeGrid(rowNum, colNum) {
    
    for (i = 0; i < (rowNum * colNum); i++) {
        let gridCell = document.createElement('div');
        gridCell.setAttribute('id', 'gridCell');
        gridContainer.appendChild(gridCell);
    };
    gridContainer.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;
    gridContainer.style.width = '50vw';
    gridContainer.style.height = '50vw';
};  

makeGrid(16, 16);

    sizingButton.addEventListener('click', () => {
        let pixelSize = prompt('What pixel size would you like to draw with?', '32');
        const gridItems = gridContainer.querySelectorAll('#gridCell');
        gridItems.forEach((gridCell) => {
            gridCell.remove();
        });
        makeGrid(pixelSize, pixelSize); 
        draw(lineColor); 
    });

    rgbButton.addEventListener('click', () => {
        hasBeenClicked = true;
        const gridItems = gridContainer.querySelectorAll('#gridCell');
        gridItems.forEach((gridCell) => {
            gridCell.style.backgroundColor = 'white';
            draw(lineColor);
        });
    });

    blackButton.addEventListener('click', () => {
        hasBeenClicked = false;
        const gridItems = gridContainer.querySelectorAll('#gridCell');
        gridItems.forEach((gridCell) => {
            gridCell.style.backgroundColor = 'white';
        });
        draw('black');
    });

function draw(lineColor) {
    const gridItems = gridContainer.querySelectorAll('#gridCell');
    gridItems.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', (e) =>  {
        if (hasBeenClicked) {
            lineColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        };
        e.target.style.backgroundColor = lineColor;
    });
});
};

draw(lineColor);

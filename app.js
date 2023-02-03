const gridContainer = document.getElementById("gridContainer");
const buttons = document.getElementById("buttons");

const sizingButton = document.createElement("button");
sizingButton.textContent = "Brush Size";
buttons.appendChild(sizingButton);
const rgbButton = document.createElement("button");
rgbButton.textContent = "Rainbow Mode";
buttons.appendChild(rgbButton);
const blackButton = document.createElement("button");
blackButton.textContent = "Black";
buttons.appendChild(blackButton);

let rgbHasBeenClicked = false;
let pixelSize = 32;

const setLineColor = (e) => {
  let lineColor = "black";
  if (rgbHasBeenClicked) {
    lineColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  }
  e.target.style.backgroundColor = lineColor;
};

function makeGrid(rowNum, colNum) {
  for (i = 0; i < rowNum * colNum; i++) {
    let gridCell = document.createElement("div");
    gridCell.setAttribute("id", "gridCell");
    gridCell.addEventListener("mouseover", (e) => {
      setLineColor(e);
    });
    gridContainer.appendChild(gridCell);
  }
  gridContainer.style.gridTemplateColumns = `repeat(${colNum}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rowNum}, 1fr)`;
  gridContainer.style.width = "50vw";
  gridContainer.style.height = "50vw";
}

sizingButton.addEventListener("click", () => {
  pixelSize = prompt("What pixel size would you like to draw with?", "32");
  const gridItems = gridContainer.querySelectorAll("#gridCell");
  gridItems.forEach((gridCell) => {
    gridCell.remove();
  });
  makeGrid(pixelSize, pixelSize);
});

rgbButton.addEventListener("click", () => {
  rgbHasBeenClicked = true;
  makeGrid(pixelSize, pixelSize);
});

blackButton.addEventListener("click", () => {
  rgbHasBeenClicked = false;
  makeGrid(pixelSize, pixelSize);
});

makeGrid(pixelSize, pixelSize);

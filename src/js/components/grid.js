import {changeColor} from './color.js';

const gridSizeElement = document.getElementById('grid-size');
const gridScreen = document.getElementById('grid-screen');
const gridContainer = document.getElementById('grid-container');

let gridSizeValue = gridSizeElement.value;

// Handle grid size change
gridSizeElement.addEventListener('change', function() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach((gridCell) => {
    gridCell.remove();
  });
  gridSizeValue = gridSizeElement.value;
  gridScreen.textContent = gridSizeValue;
  makeGrid();
});

/**
 * Draw grid, size of grid is {@link gridSizeValue}
 */
export function makeGrid() {
  gridContainer.style.gridTemplateColumns = `repeat(${gridSizeValue}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSizeValue}, 1fr)`;
  for (let i = 0; i < gridSizeValue * gridSizeValue; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridContainer.append(gridCell);
  }
  gridSetup();
}

/**
 * Add click event listener for each grid element,
 * call {@link changeColor} function on click
 */
function gridSetup() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseover', changeColor);
    gridCell.addEventListener('mousedown', changeColor);
  });
}

/**
 * Clear color from every grid element (change it to default - white)
 */
export function clear() {
  const gridCells = document.querySelectorAll('.cell');

  for (const gridCell of gridCells) {
    gridCell.style.backgroundColor = 'white';
  }
}

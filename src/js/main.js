import {turnOn, turnOff} from './components/power.js';
import {setupControls} from './components/controls.js';
import {makeGrid} from './components/grid.js';

// Load everything necessary after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Make default grid
  makeGrid();

  // Add event listeners to each MODE button
  setupControls();

  // Get POWER button
  const POWER = document.getElementById('power');

  // Add event listener to POWER button
  POWER.addEventListener('click', () => {
    POWER.classList.toggle('on');
    if (POWER.classList.contains('on')) {
      turnOn();
    } else {
      turnOff();
    }
  });
});

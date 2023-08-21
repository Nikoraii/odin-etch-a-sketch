import {clear} from './clear.js';
import {turnOffMainScreen, turnOnMainScreen} from './display.js';

const opacityButtons = Array.from(
    document.getElementsByClassName('opacity-change'),
);

const gridSize = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clear');
const buttonsMode = document.querySelectorAll('.button-mode');

const mainDisplay = document.getElementById('display');
const opacityDisplay = document.getElementById('opacity-screen');
const gridDisplay = document.getElementById('grid-screen');

/**
 * Turn on the game and enable all the buttons,
 * call {@link gridSetup()} and {@link turnOnMainScreen()} functions
 */
export function turnOn() {
  // Disable all the buttons
  opacityButtons.forEach((buttonOpacity) => {
    buttonOpacity.disabled = false;
  });

  buttonsMode.forEach((buttonMode) => {
    buttonMode.disabled = false;
  });

  gridSize.disabled = false;
  colorPicker.disabled = false;
  clearButton.disabled = false;

  // Add event listener to CLEAR button
  clearButton.addEventListener('click', clear);


  // Add classes to displays
  mainDisplay.classList.add('display-on');
  opacityDisplay.classList.add('mini-display-on');

  // Get current opacity from data-screen attr and add it to display
  opacityDisplay.textContent = `${opacityDisplay.getAttribute('data-screen')}%`;

  // Add current grid size to grid display
  gridDisplay.classList.add('mini-display-on');
  gridDisplay.textContent = gridSize.value;

  // Handle the main display
  turnOnMainScreen();
}

/**
 * Turn off the game and disable all the buttons,
 * call {@link turnOffScreen()} function
 */
export function turnOff() {
  // Disable all the buttons
  opacityButtons.forEach((buttonOpacity) => {
    buttonOpacity.disabled = true;
  });
  buttonsMode.forEach((buttonMode) => {
    buttonMode.classList.remove('active');
    buttonMode.disabled = true;
  });
  gridSize.disabled = true;
  colorPicker.disabled = true;
  clearButton.disabled = true;


  // Remove classes from displays and clear their content
  mainDisplay.classList.remove('display-on');

  opacityDisplay.classList.remove('mini-display-on');
  opacityDisplay.textContent = '';

  gridDisplay.classList.remove('mini-display-on');
  gridDisplay.textContent = '';

  // Turn off the main screen
  turnOffMainScreen();
}

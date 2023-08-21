const mainScreen = document.getElementById('screen');
const SPEED = 30;
const TITLE = '<====================== ETCH-A-SKETCH ======================>';
let txt = '';
let i = 0;
let mode = '';
let color = '';
let txtSecondary = '';
let power = 'ON';

/**
 * Replace MODE & COLOR values in main display text
 */
function replaceValues() {
  if (i = txt) {
    txtSecondary = `MODE: ${mode}\nCOLOR: ${color}`;
    txt = `${TITLE}\n${txtSecondary}`;
    mainScreen.textContent = txt;
  }
}

/**
 * Type writer effect for text
 */
function typeWriter() {
  if (power === 'ON') {
    if (i < txt.length) {
      mainScreen.textContent += txt.charAt(i);
      i += 1;
      setTimeout(typeWriter, SPEED);
    }
  }
}

/**
 * Text that shows when user turns on the game
 */
function welcomeScreen() {
  i = 0;
  mainScreen.textContent = '';

  txtSecondary = 'Welcome Player!\n' +
  'Please choose a color and drawing mode to start!';

  txt = `${TITLE}\n${txtSecondary}`;
  typeWriter();
}

/**
 * Update COLOR and MODE values in main display
 * by calling {@link replaceValues()} function
 * @param {string} element 'COLOR' or 'MODE'
 * @param {string} value current color in HEX value or what button mode is used
 */
export function updateScreen(element, value) {
  if (element === 'MODE') {
    mode = value;
  } else if (element === 'COLOR') {
    color = value;
  }
  replaceValues();
}

/**
 * Delete all text and turn off the main screen
 */
export function turnOffMainScreen() {
  power = 'OFF';
  mode = '';
  color = '';
  mainScreen.textContent = '';
}

/**
 * Turn on the main screen and start typing welcome text
 */
export function turnOnMainScreen() {
  power = 'ON';
  welcomeScreen();
}

import {updateScreen} from './display.js';

let opacity = 100;

// Add current opacity to data-screen attribute
const opacityScreen = document.getElementById('opacity-screen');
opacityScreen.setAttribute('data-screen', opacity);

// Add event listeners and handle opacity change
const opacityChangeButtons = document.querySelectorAll('.opacity-change');
opacityChangeButtons.forEach((opacityChangeButton) => {
  opacityChangeButton.addEventListener('click', function() {
    if (opacityChangeButton.id === 'opacity-up' && opacity < 100) {
      opacity += 10;
      opacityScreen.textContent = `${opacity}%`;
      opacityScreen.setAttribute('data-screen', opacity);
    } else if (opacityChangeButton.id === 'opacity-down' && opacity > 10) {
      opacity -= 10;
      opacityScreen.textContent = `${opacity}%`;
      opacityScreen.setAttribute('data-screen', opacity);
    }
  });
});

const colorPicker = document.getElementById('color-picker');
// Get current color value from Color Picker element
let color = colorPicker.value;
// Handle color picker change
colorPicker.addEventListener('change', function() {
  color = colorPicker.value;
  updateScreen('COLOR', color);
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

/**
 * Change color of clicked grid element
 * @param {event} e One grid element
 */
export function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  let buttonMode = '';

  try {
    buttonMode = document.getElementsByClassName('active')[0].id;
  } catch {
    console.error('No button selected');
  }

  if (buttonMode === 'draw') {
    e.target.style.backgroundColor = addAlpha(color, opacity / 100);
  } else if (buttonMode === 'rainbow') {
    const RANDOM_COLOR = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    e.target.style.backgroundColor = addAlpha(RANDOM_COLOR, opacity / 100);
  } else if (buttonMode === 'erase') {
    e.target.style.backgroundColor = addAlpha('#FFFFFF', 1);
  } else if (buttonMode === 'pick') {
    if (e.target.style.backgroundColor) {
      color = e.target.style.backgroundColor;
    } else {
      color = 'rgb(255, 255, 255)';
    }

    // Get RGB color values
    let values = color.split('(')[1].split(')')[0];
    values = values.split(',');

    // Convert RGB color to HEX
    color = rgbToHex(values[0], values[1], values[2]);

    // Add new color to Color Picker element
    colorPicker.value = color;
    updateScreen('COLOR', color);
  }
}

/**
 * Convert RGB color to HEX color
 * @param {number} r RGB value for red
 * @param {number} g RGB value for green
 * @param {*} b RGB value for blue
 * @return {string} HEX color value
 */
function rgbToHex(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  return '#' +
      ('0' + r.toString(16)).slice(-2) +
      ('0' + g.toString(16)).slice(-2) +
      ('0' + b.toString(16)).slice(-2);
}

/**
 * Get HEX color value and Opacity, convert that to new HEX value with opacity
 * @param {string} color HEX color value
 * @param {number} opacity Opacity for color (10 - 100)
 * @return {string} HEX color value with Alpha applied
 */
function addAlpha(color, opacity) {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

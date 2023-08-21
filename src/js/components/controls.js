import {updateScreen} from './display.js';

/**
 * Add event listener to every MODE button, call {@link updateScreen()} on click
 */
export function setupControls() {
  const buttonsMode = document.querySelectorAll('.button-mode');

  buttonsMode.forEach((buttonMode) => {
    buttonMode.addEventListener('click', () => {
      buttonsMode.forEach((button) => button.classList.remove('active'));
      buttonMode.classList.add('active');

      const colorPicker = document.getElementById('color-picker');
      const color = colorPicker.value;

      updateScreen('MODE', buttonMode.id.toUpperCase());
      updateScreen('COLOR', color);
    });
  });
}

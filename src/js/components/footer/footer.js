import {getYear} from '../../utils/year.js';

// Add current year to year element
const yearElement = document.getElementById('year');
const currentYear = getYear();

yearElement.textContent = currentYear;

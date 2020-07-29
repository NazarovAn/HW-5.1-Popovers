import { positionPopover, hideElement } from './utils';

const firstButton = document.querySelector('.first');
const secondButton = document.querySelector('.second');
const newPopover = document.getElementById('popover');

newPopover.addEventListener('click', () => hideElement(newPopover));

firstButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  hideElement(newPopover);
  positionPopover(firstButton, newPopover);
});

secondButton.addEventListener('click', (ev) => {
  ev.preventDefault();
  hideElement(newPopover);
  positionPopover(secondButton, newPopover);
});

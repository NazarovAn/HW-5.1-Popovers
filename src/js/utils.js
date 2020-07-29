export function hideElement(el) {
  const element = el;
  element.classList.add('hidden');
  element.classList.remove('not-hidden');
}

export function positionPopover(el, positioned) {
  const popover = positioned;
  popover.classList.toggle('hidden');
  popover.classList.add('not-hidden');

  const popoverHeight = popover.getBoundingClientRect().height;
  const popoverWidth = popover.getBoundingClientRect().width;
  const popoverCenter = popoverWidth / 2;

  const element = el;
  const { top, left, width } = element.getBoundingClientRect();
  const centerOfElement = width / 2 + left;
  popover.style.top = `${top - popoverHeight - 5}px`;
  popover.style.left = `${centerOfElement - popoverCenter}px`;
}

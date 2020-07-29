import { hideElement } from '../utils';

test('hide popover', () => {
  const someDiv = document.createElement('div');
  someDiv.className = 'not-hidden';
  hideElement(someDiv);
  expect(someDiv.className).toBe('hidden');
});

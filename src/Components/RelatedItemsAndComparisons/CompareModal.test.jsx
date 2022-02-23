// import dependencies
import React from 'react';

// // import API mocking utilities from Mock Service Worker
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';

// import react-testing methods
import {
  render,
  screen,
} from '@testing-library/react';

// // add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

import CompareModal from './CompareModal';

test('CompareModal can render', () => {
  render(<CompareModal cardProductID={40345} overViewProductID={40351} />);
  expect(screen.getByTestId('modal-style')).toBeTruthy();
  expect(screen.getByTestId('grid-style')).toBeTruthy();
});

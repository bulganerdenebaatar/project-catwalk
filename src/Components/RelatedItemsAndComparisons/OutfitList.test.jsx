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

import OutfitList from './OutfitList';

test('OutfitList can render', () => {
  render(<OutfitList />);
  expect(screen.getByTestId('list')).toBeTruthy();
});

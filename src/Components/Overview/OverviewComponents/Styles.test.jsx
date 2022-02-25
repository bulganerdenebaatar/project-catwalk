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

import Overview from '../index.jsx';
import Styles from './Styles';

test('The Styles component renders correctly', () => {
  render(<Overview />);
  render(<Styles />);
  expect(screen.getByTestId('styles')).toBeTruthy();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check there is a link to the repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Git Repo/i);
  expect(linkElement).toBeInTheDocument();
});

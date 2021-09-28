import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders input', () => {
  render(<SearchBar />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

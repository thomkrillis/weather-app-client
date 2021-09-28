import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';
import { store } from '../../app/store';

test('renders input', () => {
  render(
    <Provider store={store}>
      <Router>
        <SearchBar />
      </Router>
    </Provider>
  );
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar, { getCurrentTerm } from './SearchBar';
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

test('gets correct search term', () => {
  const term1 = getCurrentTerm('?s=10003');
  const term2 = getCurrentTerm('?s=Boston,%20MA');
  const term3 = getCurrentTerm('?s=New%20York,%20NY');
  const term4 = getCurrentTerm('?s=London,%20England&t=New%20York,%20NY');
  expect(term1).toEqual('10003');
  expect(term2).toEqual('Boston, MA');
  expect(term3).toEqual('New York, NY');
  expect(term4).toEqual('London, England');
});
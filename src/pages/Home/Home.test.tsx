import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import { store } from '../../app/store';

test('renders title text', () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/find your weather/i);
  expect(linkElement).toBeInTheDocument();
});

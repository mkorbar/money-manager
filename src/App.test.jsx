import { React } from 'react';
import {
  render, screen,
} from '@testing-library/react';
import App from './App';

describe('Basic fuctionality of the app', () => {

  it('has a title', () => {
    render(<App />);
    const linkElement = screen.getAllByRole('heading')[0];
    expect(linkElement).toBeInTheDocument();
  });

});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
	it('renders', () => {
		render(<Contact	/>);
	})

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    // assert value comparison
	  expect(asFragment()).toMatchSnapshot();

  });	
});

describe('text is visible', () => {
  it('inserts text', () => {
    const { getByTestId } = render(<Contact	/>);
    expect(getByTestId('title')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
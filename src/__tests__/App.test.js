import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Form from   '../components/Forms/Form'


it('renders input form for todos ', () => {
  const { container } = render(<Form />)
  container.querySelector('.todo__input')
  expect(container.firstChild).toMatchSnapshot()
});

it('renders all todos ', () => {
  const { container } = render(<App />)
  container.querySelector('.todos')
  expect(container.firstChild).toMatchSnapshot()
});


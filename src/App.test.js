import axios from 'axios';

import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Search from './App';


let container;

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);

    await screen.findByText(/Singed in as/);

    // screen.debug();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'JavaScript' },
    // });

    // screen.debug();

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();

    // expect(screen.queryByText(/Signed in as/)).toBeNull(); //nullをアサーションするにはqueryByを使う

    // screen.debug();

    // expect(await screen.findByText(/Singed in as/)).toBeInTheDocument();

    // screen.debug();
  });
});

describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>, container
    );

    await act(async () => await userEvent.type(screen.getByRole('textbox'), 'JavaScript'))
    // await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(10));
    // screen.debug();
    // console.log(screen.getByRole('textbox'));

    // expect(onChange).toHaveBeenCalledTimes(10);
  });
});





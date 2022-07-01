import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';
// import rocketReducer from '../redux/rockets/rockets';

describe('Rocket Tests', () => {
  test('for proper rendering of rockets', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.findAllByRole('button', { name: /Reserve Rocket/ }).toMatchSnapshot);
  });

  it('renders porperly', () => {
    const rocket = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rocket).toMatchSnapshot();
  });
});

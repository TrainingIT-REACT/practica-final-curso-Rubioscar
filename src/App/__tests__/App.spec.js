import React from 'react';
import { render } from 'enzyme';

// Componente
import App from '../App';
import Load from '../Load';

describe(App, () => {
  it('renders correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})

describe("Test enzyme de Inicio", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Load />);
  });

  it('Comprobar la carga de Inicio', () => {
    expect(wrapper.find('div').length).toBe(1);
  })
})

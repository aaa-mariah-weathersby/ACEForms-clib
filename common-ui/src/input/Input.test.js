import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

it('renders an input element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('stores the current values onChange', () => {
  let field = ReactDOM.render(<Input />, div);

})

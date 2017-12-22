import React from 'react';
import ReactDOM from 'react-dom';
import JobPosting from './JobPosting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobPosting />, div);
});

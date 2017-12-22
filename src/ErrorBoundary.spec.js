// TODO: Enforce 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import JobPosting from './ErrorBoundary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorBoundary />, div);
});

// TODO: Test error condition

/** @format */

import React, { Component } from 'react';

// Local imports
import ErrorBoundary from './errorBoundary';

// Media imports
import logo from './logo.svg';
import './App.scss';

// Set a logger for error output on ErrorBoundary component
const myErrorHandler = (error: Error, componentStack: string) => {
  // ...
};

class App extends Component {
  render() {
    return (
      <ErrorBoundary onError={myErrorHandler}>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Welcome to React</h1>
          </header>
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ErrorBoundary>
    );
  }
}

/* eslint-disable */
//undefinedfunction(a);

export default App;

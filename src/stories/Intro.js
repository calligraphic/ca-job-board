/** @format */

import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily:
      '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif'
  }
};

export default class Intro extends React.Component {
  render() {
    return (
      <div style={styles.main}>
        <h1>Calligraphic Job Board Storybook</h1>
        <p>This is a UI component development environment for the Job Board.</p>
      </div>
    );
  }
}

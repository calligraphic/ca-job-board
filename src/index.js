import React from 'react';
import ReactDOM from 'react-dom';

// local imports
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// TODO: enable service worker for caching (allows offline app use)
// after production version fully tested. Service workers require HTTPS.
// registerServiceWorker();

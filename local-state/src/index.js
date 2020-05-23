import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import ReactDOM from 'react-dom';
import Root from './components/Root';
import RelayEnvironment from './relay/RelayEnvironment';
import * as serviceWorker from './serviceWorker';

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <Root />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';

// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';


import App from 'components/App';
import Dark from 'components/arrow/arrows';
import Headers from 'components/head/head.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={store.persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    <Dark />
    <Headers />
  </React.StrictMode>
);

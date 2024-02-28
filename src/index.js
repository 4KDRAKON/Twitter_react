import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as Pro } from './Components/context/context';
import { Provider  } from './Components/context/theme';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider>
   <Pro >
    <App />
    </Pro>
   </Provider>
  </React.StrictMode>
);



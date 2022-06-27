import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  {store} from './store/index';
import {Provider} from 'react-redux';
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(process.env.REACT_APP_SYNC_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

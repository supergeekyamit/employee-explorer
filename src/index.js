import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import employee from "./store/reducers/employeeReducer";
import { watchEmployees } from './store/sagas';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  employee,
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(watchEmployees);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

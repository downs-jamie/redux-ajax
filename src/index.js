import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';


const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);


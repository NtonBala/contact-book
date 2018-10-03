import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

const app = document.getElementById('app');

const store = configureStore();

const render = () => {
    const App = require('./App').default;

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        app
    );
};

if (module.hot) {
    module.hot.accept('./App', () => {
        setTimeout(render);
    });
}

render();

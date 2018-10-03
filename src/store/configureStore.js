import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/root';
import rootSaga from '../sagas/root';

const configureStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../reducers/root', () => {
                const newRootReducer = require('../reducers/root').default;
                store.replaceReducer(newRootReducer);
            });
        }
    }

    return store;
};

export default configureStore;

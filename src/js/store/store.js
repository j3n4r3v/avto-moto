import { createStore, applyMiddleware } from 'redux';
import redirect from './redirect/redirect';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(redirect)
    )
);

export default store;
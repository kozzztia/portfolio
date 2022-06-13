import { createStore, combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const applyMiddleware = require("redux").applyMiddleware;

// apply  будет роботать только с етой фишкой


const rootReducer = combineReducers(

    {
        cash: cashReducer,
        customers: customerReducer,
    }
)



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
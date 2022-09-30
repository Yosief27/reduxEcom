import {createStore} from 'redux';
import {reducers } from './reducers/index';

//creating the store with all the available reducers ready to use 
const  store=createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

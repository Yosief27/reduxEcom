import {combineReducers} from 'redux';
import {productReducer} from './productReducer';

//all the reducers will be in one object and send to store ,may be we can have several many other reducers
export  const reducers=combineReducers({
    allProducts:productReducer,
})
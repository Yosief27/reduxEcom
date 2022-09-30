import {actionTypes } from '../constants/action-types'
const initailState={products:[
    {
        id:1,
        title:'josi',
        category:'program'
    },
]}
export const productReducer=(state=initailState,{type,payload})=>{
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return state;
       case actionTypes.REMOVE_SELECETED_PRODUCT:
            return state.filter(product=>product.id!==payload.product.id);
        case actionTypes.SELECTED_PRODUCT:
            return state.filter(product=>product.id===payload.product.id);
        default:

            return state ;
    }


}
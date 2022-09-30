import {actionTypes } from '../constants/action-types'
const initailState={products:[
  
]}
export const productReducer=(state=initailState,{type,payload})=>{
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return {...state,products:payload};
       case actionTypes.REMOVE_SELECETED_PRODUCT:
            return state.filter(product=>product.id!==payload.product.id);
        default:

            return state ;
    }


}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        
        case actionTypes.SELECTED_PRODUCT:
            return {...state,payload}
        default:
                        return state ;
    }


}
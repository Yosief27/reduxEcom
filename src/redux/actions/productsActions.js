import {actionTypes} from '../constants/action-types'

export const setProducts=(products)=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts=(product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct=(product)=>{
    return{
        type:actionTypes.REMOVE_SELECETED_PRODUCT,
        payload:product
    }
}
import React , {useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {setProducts}  from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'
const ProductList = () => {
const dispatch=useDispatch();
const getProducts= async ()=>{
  const products=await axios.get("https://fakestoreapi.com/products").catch(e=> console.log(e))
  dispatch(setProducts(products.data))
}
useEffect(()=>{
  getProducts()
},[])
  return (
    <div className='ui grid container'>
      
        <ProductComponent/>
    </div>
  )
}

export default ProductList
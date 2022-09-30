import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectedProducts} from '../redux/actions/productsActions'
const ProdcutDetail = () => {
  const dispatch=useDispatch();
  const {id} =useParams();
  const fetchSingleProduct= async()=>{
    const product= await axios.get(`https://fakestoreapi.com/products/${id}`).catch(e=>console.log(e))
    console.log(product.data)
    dispatch(selectedProducts(product)) 
  }
  useEffect(()=>{
    fetchSingleProduct();
  },[id])
  return (
    <div>{}</div>
  )
}

export default ProdcutDetail
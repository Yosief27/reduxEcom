import React from 'react'
import  {useSelector } from 'react-redux' 
const ProductComponent = () => {
  const product=useSelector((state)=>state.allProducts.products)
  console.log(product)
  const {id,title,category} =product[0];
  console.log(id )
    return (
    <div>
        <p>{id}</p>
        <p>{category}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default ProductComponent
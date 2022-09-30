import React from 'react'
import  {useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
const ProductComponent = () => {
  const products=useSelector((state)=>state.allProducts.products)
    console.log(products.length)
    const renderedProduct=products.map(product=>{
return(
    <Link to={`/product/${product.id}`}>
    <div className='four column wide' key={product.id}>
      <div className='ui link cards'>
        <div className='card'>
          <div className='image'>
            <img src={product.image} alt={product.title}/>
          </div>
          <div className='content'>
            <div className='header'>{product.title} </div>
            <div className='meta price'>{product.price} </div>
            <div className='meta '>{product.category} </div>

          </div>
        </div>

      </div>
    </div>
    </Link>
)
    })
    return (
      <div className='collstyle'>{renderedProduct}</div>
  )
}

export default ProductComponent
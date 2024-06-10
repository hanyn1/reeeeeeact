import React from 'react'
import product from '../data/product'
import 'bootstrap/dist/css/bootstrap.css';
export default function Image() {
  return (
    <div>
      {
        product.map((ele)=>(
            <img src={ele.image} alt="..." />
        ))
      }
    </div>
  )
}

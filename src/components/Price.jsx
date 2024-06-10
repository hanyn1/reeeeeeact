import React from 'react'
import product from '../data/product'
export default function Price() {
  return (
    <div>
      {
        product.map((ele)=>(
            <h1>{ele.price}</h1>
        ))
      }
    </div>
  )
}

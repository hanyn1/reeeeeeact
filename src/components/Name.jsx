import React from 'react'

import product from '../data/product';
export default function Name() {
  return (
    <div>
      {
        product.map((ele)=>(
            <h1>{ele.name}</h1>
        ))
      }
    </div>
  )
}

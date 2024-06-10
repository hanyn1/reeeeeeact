import React from 'react'
import product from '../data/product'
export default function Description() {
  return (
    <div>
      {
product.map((ele)=>(
    <h1>{ele.description}</h1>
))
      }
    </div>
  )
}

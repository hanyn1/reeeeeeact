import React from 'react'
import product from '../data/product'
import 'bootstrap/dist/css/bootstrap.css';
export default function Card() {
   
    
        const validateName = () => {
          const name = prompt('Please enter your name:');
          if (name) {
            alert(`Hello, ${name}!`);
          } else {
            alert('You did not provide your name.');
          }
        };  
  return (
    <div>
        <button onClick={validateName} >click me</button>
       {
      product.map(
        (ele)=>(
          <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={ele.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{ele.description}</h5>
    <p className="card-text">{ele.price}</p>
   
  </div>
</div>
        )
      )
     }
     
     
    </div>
  )
}

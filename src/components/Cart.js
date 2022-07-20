import React ,{useContext}from 'react'
import { store } from "../App";

export default function Cart({setcartstat}) {
    const [state] = useContext(store);
  
 const  price=[0]

function myFunc(total, num) {
  return total + num;
}



  return (
    <div className="cart is-open cart-header">Cart
    <div>
    <button onClick={()=>{setcartstat(false)}}>Exit</button>
    </div>
   
    <ul className='cart-items'>
  {Object.entries(state.cartItems).map(([key, value]) => (
    <li className='cart-item' key={key}>
      
     <div className='cart-item-title'>{value.name}</div>
     <img src={value.poster} className='product-item img' alt='img'></img>
    <div>Price: {value.quantity}* ₹{value.price}= ₹{value.quantity*value.price} 
    
    </div>
    <div className='hide'>{price.push(value.quantity*value.price)}</div>
    <div>
    </div>
    </li>
  ))}
</ul>
<div className='cart-footer'>
    
    Cart Price : ₹{price.reduce(myFunc)}

</div>
    </div>
  )
}

import React, { useContext } from "react";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

export default function Cart({ setcartstat }) {
  const [state, setState] = useContext(store);

  const price = [0];

  function myFunc(total, num) {
    return total + num;
  }
  const { cartItems } = state;

  function addItem(item) {
    if (cartItems[item.id]) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity + 1,
          },
        },
      });
    } else {
      // seting a new state -> you want the previous state's snapshot also so that you dont lose on the previously updated state of some keys
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: 1,
          },
        },
      });
    }
  }
  function removeItem(item) {
    if (cartItems[item.id].quantity > 1) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: cartItems[item.id].quantity - 1,
          },
        },
      });
    } else {
      const obj = cartItems;
      delete obj[item.id];
      setState({ ...state, cartItems: obj });
    }
  }

  return (
    <div className="cart is-open cart-header">
      Cart
      <div>
        <button
          onClick={() => {
            setcartstat(false);
          }}
          className="cart exit"
        >
          Exit
        </button>
      </div>
      <div className="cart-items">
        {Object.entries(state.cartItems).map(([key, item]) => (
          <div key={item.id} className="cart-item">
             <div className="cart-item-title">{item.name}</div>
            <img alt={item.name} src={item.poster} />
            <div >
             
              <div >
                <span>₹{item.price}</span>
                <div>
                <AddRemoveButton
                  item={item}
                  cartItems={cartItems}
                  addItem={() => addItem(item)}
                  removeItem={() => removeItem(item)}
                />
                </div>
                <div>
                  Price: {item.quantity}* ₹{item.price}= ₹
                  {item.quantity * item.price}
                </div>
                <div className="hide">
                  {price.push(item.quantity * item.price)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">Cart Price : ₹{price.reduce(myFunc)}</div>
    </div>
  );
}

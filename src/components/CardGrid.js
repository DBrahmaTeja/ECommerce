import React, { useContext } from "react";
import { pets } from "../data";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";
//  given a provider -> we have have stored the state of th active tab in the
// the global context;
// now we
// import AddRemoveButton from "./AddRemoveButton";
// across the level component global state coming to the rescue

const CardGrid = () => {
  const [state, setState] = useContext(store);
  const { activeCategory, cartItems } = state;
  // cartItems would consist of the cards on which + was clciked
  // if already have that item then  + 1
  // the cart items does not have that card and you guys have to add that card
  // why ? ...state?
  // {
  // activeCaregory: "cats"
  // quantity: 2}

  function addItem(item) {
    if (cartItems[item.id]) {
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...cartItems[item.id],
            quantity: cartItems[item.id].quantity + 1
          }
        }
      });
    } else {
      // seting a new state -> you want the previous state's snapshot also so that you dont lose on the previously updated state of some keys
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: 1
          }
        }
      });
    }
  }
  function removeItem(item) {
    if (cartItems[item.id].quantity > 1) {
      console.log("quant 1");
      setState({
        ...state,
        cartItems: {
          ...cartItems,
          [item.id]: {
            ...item,
            quantity: cartItems[item.id].quantity - 1
          }
        }
      });
    } else {
      console.log("quant less");
      const obj = cartItems;
      delete obj[item.id];
      setState({ ...state, cartItems: obj });
    }
  }
  const filteredPets = pets.filter((pet) => pet.category === activeCategory);
  return (
    <div className="products">
      {filteredPets.map((item) => {
        return (
          <div key={item.id} className="product-item">
            <img alt={item.name} src={item.poster} />
            <div className="product-detail">
              <div className="product-title">{item.name}</div>
              <div className="product-purchase">
                <span>₹{item.price}</span>
                <AddRemoveButton
                  item={item}
                  cartItems={cartItems}
                  addItem={() => addItem(item)}
                  removeItem={() => removeItem(item)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardGrid;

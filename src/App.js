import React, { createContext, useState} from "react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";
import { navbar } from "./data";
import "./styles.scss";
import Cart from "./components/Cart";

// context of store has een created

// provider or a consumer
// store is an object
// store.provider

export const store = createContext([
  { activeCategory: "xbch", cartItems: {}, totalPrice: 0 },
  (obj) => obj
]);
// npm install sass --save-dev


function App() {
  // useState returns an array of value and an updater function
  const [cartstat, setcartstat]= useState(false);

  
  
  const state = useState({
    activeCategory: "dogs",
    cartItems: {},
    totalPrice: 0
  });
  return (
    <store.Provider value={state}>
      <div className="app">
        <div className="app-header">
          <Navbar items={navbar} />
          <button className="button" onClick={()=>{cartstat?setcartstat(false):setcartstat(true)}}>
            Cart
          </button>
          {cartstat?<Cart setcartstat={setcartstat}/>:""}
        </div>
        <CardGrid />
        
        
      </div>
    </store.Provider>
  );
}

export default App;
// nav bar
// card
// grid -> which would render these cards

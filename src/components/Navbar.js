import React, { useContext } from "react";
import { store } from "../App";

// you have to crreate context using createContext -> returns an object
// which has keys of provider and consumer
// we would be using returned context.provider to wrap our app with it so that the children have the access to the value without prop drilling

const Navbar = ({ items }) => {
  const [state, setState] = useContext(store);
  const { activeCategory } = state;
  // make a new object -> with state as previous//
  // children ()
  return (
    <div className="navbar">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setState({ ...state, activeCategory: item.name })}
            className={`navbar-item ${
              activeCategory === item.name ? "is-selected" : " "
            }`}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

// navbar -> succefully built the navbar

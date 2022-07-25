import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from './About'
import Cart from './Cart'
function Home() {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
    <div>
      <h1>This is HOME</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h1><button onClick={ () =>setIsOpen(true)}>Open Cart</button></h1>
      <Cart open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Cart
        <About/>
      </Cart>
      <h3>THis is OTHER content</h3>
    </div>
    </>
  );
}

export default Home;

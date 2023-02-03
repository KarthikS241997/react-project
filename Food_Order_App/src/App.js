import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import ContextProvider from "./components/Store/ContextProvider";

function App() {

  const [isCartShown, setisCartShown] = useState(false);

  const showCartHandler = () =>{
    setisCartShown(true);
  }
  const hideCartHandler = () =>{
    setisCartShown(false);
  }

  return (
    <ContextProvider>
     {isCartShown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </ContextProvider>    
  );
}

export default App;

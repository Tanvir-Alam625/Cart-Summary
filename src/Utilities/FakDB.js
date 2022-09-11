// use local storage to manage cart data
const addToDb = (product) => {
    let shoppingCart = {};
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
  
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  };
  const getLocalStorageCart = () => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
  };
  
  const removeFromDb = (id) => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart);
      if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
      }
    }
  };
  
  const deleteShoppingCart = () => {
    //   const storedCart = localStorage.getItem("shopping-cart");
    //   console.log(storedCart);
    //   for (const cart in storedCart) {
    //     delete storedCart[cart];
    //   }
    localStorage.removeItem("shopping-cart");
  };
  
  export { addToDb, removeFromDb, getLocalStorageCart, deleteShoppingCart };
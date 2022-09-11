import React,{useState} from 'react'
import  CheckoutRow from "./CheckoutRow";


const Checkout = () => {
  const [totalPrice,setTotalPrice]=useState()
  const getCartItems = localStorage.getItem("shopping-cart");
  const cartProduct = JSON.parse(getCartItems);
  let addedItems = [];
  for( const product in cartProduct ){
    const showingP = JSON.parse(product)
    addedItems =[showingP, ...addedItems]
    
  }
 
  return (
    <div className='my-6 bg-light mx-2'>
      <h2 className='text-2xl my-4'>Checkout</h2>
      {/* start cart form  */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {
              addedItems?.map(product=> <CheckoutRow key={product._id} product={product}/>)
            }
          </tbody>
        </table>
      </div>
  </div>
  )
}
export default Checkout;
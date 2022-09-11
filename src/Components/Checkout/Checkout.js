import React,{useState} from 'react'
import  CheckoutRow from "./CheckoutRow";
import {useNavigate} from "react-router-dom"

const Checkout = () => {
  const navigate= useNavigate()
  let totalPrice = 0;
  let addedItems = [];
  const getCartItems = localStorage.getItem("shopping-cart");
  const cartProduct = JSON.parse(getCartItems);
  for( const product in cartProduct ){
    const showingP = JSON.parse(product)
    addedItems =[showingP, ...addedItems]
    const price = showingP.price *showingP.productQuantity
    totalPrice=totalPrice+price
  }
 
  return (
    <div className='my-6 bg-light mx-2'>
      <h2 className='text-2xl my-4'>Checkout</h2>
      {/* start cart form  */}
      <div className="w-full flex justify-start my-6">
      <button className="btn btn-secondary text-white" onClick={()=> localStorage.removeItem("shopping-cart")}>Delete All</button>
      </div>
     <div className="flex">
     <div className="overflow-x-auto w-[70%]">
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
      <div className="max-h-[300px] ml-4 p-4 border rounded">
            <h2 className="text-xl text-gray-400 font-bold text-center mb-6">Cart Totals</h2>
            <div className="flex text-gray-400 justify-between py-2 text-md font-[500]">
                <h3>Subtotals:</h3>
                <span >${totalPrice}</span>
            </div>
            <hr/>
            <div className="flex justify-between py-2 text-xl text-blue-700 font-bold">
              <h3 >Totals:</h3>
              <span >${totalPrice}</span>
            </div>
            <button onClick={()=> {
              navigate("/orderProcced")
              localStorage.removeItem("shopping-cart")
              }} className="py-2 px-6 text-white font-bold bg-blue-700 rounded-3xl ">PROCED TO CHECKOUT</button>
        </div>
     </div>
  </div>
  )
}
export default Checkout;
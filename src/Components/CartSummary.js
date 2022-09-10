import React from 'react'
import useProducts from '../hook/useProducts'
import  CartRow  from './CartRow';

export default function CartSummary() {
  const{products,loading}=useProducts();
  if(loading){
    return <h2>Loading data...</h2>
  }
  return (
    <div className='my-6 bg-light mx-2'>
      <h2 className='text-2xl'>Order Summary</h2>
      {/* start cart form  */}

      <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            products?.map(product=> <CartRow product={product} key={product?._id}/>)
          }
          </tbody>
      </table>
      </div>
    </div>
  )
}

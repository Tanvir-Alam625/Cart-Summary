import React from 'react'
import useProducts from '../hook/useProducts'
import  CartRow  from './CartRow';

export default function CartSummary() {
  const{products,loading}=useProducts();
  if(loading){
    return <h2>Loading data...</h2>
  }
  const category =["Men's Sneaker", "Men's Pants", "Men's Boot","Cap"]
  const getCategory=()=>{

  }
  return (
    <div className='my-6 bg-light mx-2'>
      <h2 className='text-2xl my-4'>Order Summary</h2>
      <div className="filtering-container flex justify-between w-full my-6">
        <div className="CategorySize-filtering flex justify-around w-[50%]">

          {/* Category filltering  */}
            <form className="flex justify-around w-full">
              <div className="form-control ">
                <select onChange={getCategory} className="select select-bordered">
                  <option  selected>Select Category</option>
                 {
                  category.map((ca,index)=> <option ca={ca} index={index}>{ca}</option>)
                 }
                </select>
              </div>
              <div className="form-control w-24">
                <select className="select select-bordered">
                  <option  selected>Select Size</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>M</option>
                  <option>S</option>
                </select>
              </div>
              <div className="resetBtn flex text-xl items-center text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>

                <button type="reset" className="py-2 px-4 bg-transparent ">Reset</button>
              </div>
          </form>
        </div>
        <div className="search-filtering flex justify-end  w-[50%]">
        <input type="text" placeholder="Type here"  className="input input-bordered input-accent w-[200px] mr-4" />
        <button class="py-2 px-4 bg-blue-500 text-white">Add to Cart</button>
        </div>
      </div>
      {/* end Filtering section  */}
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

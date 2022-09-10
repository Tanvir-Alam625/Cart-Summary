import React,{useState} from 'react'

const CartRow = ({product}) => {
    const {name,price,img,stock}=product;
    const[quantity,setQuantity]=useState(1)
    const decreamentQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
  return (
    <tr>
            <td>
                <div className="p-2 rounded flex justify-center w-24 ">
                <img src={img} className="w-full rounded-md" alt="product-img" />
                </div>
            </td>
            <td>
                {
                    name
                }
            </td>
            <td>{stock>0?<span className='text-green-500'>In Stock</span>:<span className='text-red-500'>Out of Stock</span>}</td>
            <th>$
                {
                    price
                }
            </th>
            <th>
                <div className="flex justify-between items-center w-full">
                <div className="p-2 border flex justify-between text-xl rounded-3xl w-[50%]">
                    <button onClick={decreamentQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                       
                    </button>
                    <span>{quantity}</span>
                    <button onClick={()=>setQuantity(1+quantity)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between w-[50%]">
               <div className="py-2 px-4 rounded-md ml-2 bg-gray-400 text-white">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
               </div>
                <input type="checkbox"  className="checkbox checkbox-lg" />
                </div>
                </div>

            </th>
          </tr>
  )
}
export default CartRow;

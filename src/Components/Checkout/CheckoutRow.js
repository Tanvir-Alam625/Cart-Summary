import React,{useState} from 'react'

const CheckoutRow = ({product}) => {
    const {name,price,img, _id,productQuantity}=product;
    let[quantity,setQuantity]=useState(productQuantity)
    let newQuantity =productQuantity
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
        {name}
    </td>
    <th>$ {price}
    </th>
    <th>
        <div className="flex justify-between items-center w-full">
            {/* start the  quantity container  */}
            <div className="p-2 border flex justify-between text-xl rounded-3xl w-full">
                <button onClick={decreamentQuantity}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </button>
                <span>{quantity}</span>
                <button onClick={()=>setQuantity(quantity++)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
        </div>
    </th>
    <th>${quantity*price}</th>
  </tr>
  )
}

export default CheckoutRow
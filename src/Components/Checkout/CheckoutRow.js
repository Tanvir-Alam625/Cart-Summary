import React,{useState} from 'react'
import {removeFromDb } from "../../Utilities/FakDB";
const CheckoutRow = ({product}) => {
    const {name,price,img, _id,productQuantity}=product;
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
           {productQuantity}
    </th>
    <th>${productQuantity*price}</th>
  </tr>
  )
}

export default CheckoutRow
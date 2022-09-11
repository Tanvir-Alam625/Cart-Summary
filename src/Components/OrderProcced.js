import React from 'react'
import {useNavigate} from "react-router-dom"
const OrderProcced = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen flex justify-center items-center flex-col ">
        <h2 className="text-2xl text-blue-700 font-bold mb-4">Thank You Your Order Procced Successfully</h2>
        <button onClick={()=>navigate("/")}  className="py-2 px-6 text-white font-bold bg-blue-700 rounded-3xl ">Go Back Home</button>
    </div>
  )
}

export default OrderProcced
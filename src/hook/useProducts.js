import { useEffect, useState } from "react"

const useProducts= ()=>{
    const [products,setProducts]=useState(null);
    const[loading,setLoading]=useState(true);
     const [refech, setRefech]=useState(false)
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoading(false)
        })
    },[refech])

    return{products,loading, refech, setRefech}

}
export default useProducts;
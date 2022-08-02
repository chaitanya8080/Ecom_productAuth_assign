



export const handleLaoding = ()=>({
    type:"IS_LOADING"
})
export const storeData = (payload)=>({
    type:"STORE_DATA",
    payload
})

export const handleError = ()=>({
    type:"IS_ERROR"
})


export const getData = ()=>(dispatch)=>{
    dispatch(handleLaoding());
    fetch("http://localhost:7089/products")
    .then((res)=>res.json()).then((res)=>{
      
      dispatch(storeData(res.data))
      console.log(res.data);
      
    }).catch(()=>dispatch(handleError()))  
}




export const handleCurrentProductLaoding = ()=>({
    type:"CURRENT_PRODUCT_LOADING"
})
export const handleCurrentProductSuccess = (payload)=>({
    type:"CURRENT_PRODUCT_SUCCESS",
    payload
})

export const handleCurrentProductError = ()=>({
    type:"CURRENT_PRODUCT_ERROR"
})


export const getCurrentProductData = (_id)=>(dispatch)=>{
    dispatch(handleCurrentProductLaoding());
    fetch(`http://localhost:7089/products/${_id}`)
    .then((res)=>res.json()).then((res)=>{
      
      dispatch(handleCurrentProductSuccess(res.data))
      console.log(res.data);
      
    }).catch(()=>dispatch(handleCurrentProductError()))  
}
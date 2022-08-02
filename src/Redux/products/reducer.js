



const initState = {
    loading:false,
    error:false,
    products:[],
    currentProduct:{}
}


export const productReducer = (state = initState, action)=>{
    switch(action.type){
        case "IS_LOADING":
            return {...state, loading:true}
        case "STORE_DATA":
            return {...state, products:action.payload}
        case "IS_ERROR":
            return {...state,error:true}
        case "CURRENT_PRODUCT_LOADING":
            return {...state, loading:true}
        case "CURRENT_PRODUCT_SUCCESS":
            return {...state, currentProduct : action.payload}
        case "CURRENT_PRODUCT_ERROR":
            return {...state,error:true}

        default : return state;
    }
}
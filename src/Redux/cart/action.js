
import { ADD_TO_CART ,INCREASE_QTY,DECREASE_QTY ,REMOVE_FROM_CART} from "./actionType"

const addtoCart = (payload) => ({
    type : ADD_TO_CART,
    payload
})

const increaseQty = (payload) => ({
    type : INCREASE_QTY,
    payload
})

const decreaseQty = (payload) => ({
    type : DECREASE_QTY,
    payload
})

const removeFromCart = (payload)=>({
    type : REMOVE_FROM_CART,
    payload
})



export {addtoCart,increaseQty,decreaseQty,removeFromCart} 
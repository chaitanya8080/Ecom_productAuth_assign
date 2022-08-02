

import { ADD_TO_CART, INCREASE_QTY,DECREASE_QTY, REMOVE_FROM_CART} from "./actionType";

const initState = {
    cart :[]
}


const cartReducer = (state= initState, action)=>{
    switch(action.type){


    case ADD_TO_CART:

         const  ispresent = state.cart.find((prod)=>{
            return prod.id === action.payload.id && prod.size === action.payload.size
         })
         let newCart;
         if(ispresent){
              newCart = state.cart.map((prod)=>{
                if(prod.id === action.payload.id && prod.size === action.payload.size){
                    return {...prod, qty:prod.qty+1}
                }
                else{
                    return prod;
                }
            })
         }else{
           let  newPayload = {
                ...action.payload,
                 qty:1
            }
            newCart = [...state.cart, newPayload]
         }

         return {...state, cart : newCart};


case INCREASE_QTY:
            let increaseCart = state.cart.map((prod)=>{
                if(prod.id === action.payload.id && prod.size === action.payload.size){
                    return {...prod, qty:prod.qty+1}
                }
                else{
                    return prod;
                }
            })
            return {...state, cart:increaseCart}


case DECREASE_QTY:
            let decreaseCart = state.cart.map((prod)=>{
                if(prod.id === action.payload.id && prod.size === action.payload.size){
                    return {...prod, qty:prod.qty-1}
                }
                else{
                    return prod;
                }
            })
            return {...state, cart:decreaseCart}


case REMOVE_FROM_CART:
     let removedCart = state.cart.filter((prod)=>{
        return !(prod.id === action.payload.id && prod.size === action.payload.size)
     })

     return {...state, cart:removedCart}


    default :return state;
    }
}

export {cartReducer}
import { ADD_TO_CART } from "./constants";
import { REMOVE_FROM_CART } from "./constants";
export const addToCart = (data)=>{
    console.warn("add to cart", data);
    return {
        type: ADD_TO_CART,
        data
    };
}

export const removeFromCart = (data)=>{
    console.warn("Remove from cart", data);
    return {
        type: REMOVE_FROM_CART,
        data
    };
}
import {ADD_TO_CART, REMOVE_FROM_CART} from "./constants";

export const cartData = (data=[], action) => {
    // if(action.type === ADD_TO_CART)
    // {
    //     console.warn("reducer called");
    //     //somelogic
    //     return data;
    // }
    // else
    // {
    //     return "no action called";
    // }
    switch(action.type)
    {
        case ADD_TO_CART:
             return [action.data, ...data];
        case REMOVE_FROM_CART:
           
               data.length = data.length - 1;
            return [...data];
        default:
            return [];
    }
}
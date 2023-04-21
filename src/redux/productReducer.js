import {SET_PRODUCT_LIST, PRODUCT_LIST} from "./constants";

export const productData = (data=[], action) => {
    switch(action.type)
    {
        // case PRODUCT_LIST:
        //     console.warn("Product_list condition ", action);
        //     return [action.data];
            case SET_PRODUCT_LIST:
                console.warn("Product_list condition ", action);
                return [action.data];//... not working
        default:
            return [];
    }
}
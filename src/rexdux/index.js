// for add item to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}


// for Delete item to cart

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
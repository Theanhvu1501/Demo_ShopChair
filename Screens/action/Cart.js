export const addNewCart = (products) => {
    return{
        type:'ADD_CART',
        payload:products    
    }
}
export const removeCart = (products) => {
    return{
        type:'REMOVE_CART',
        payload:products    
    }
}

export const incQuantyti = () => {
    return {type:'INC_QUANTITY'}
}

export const decQuantyti = () => {
    return {type:'DEC_QUANTITY'}
}
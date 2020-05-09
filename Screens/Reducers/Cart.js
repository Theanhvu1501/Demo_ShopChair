
const initialState = {
    arrayCart:[],
    quantity:1,
}

const CartReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_CART':
            const newList = [...state.arrayCart];
            newList.push(action.payload)
            return{
                ...state,
                arrayCart:newList
            }
        case 'REMOVE_CART':
            return{
                ...state,
                arrayCart:state.arrayCart.filter(item => item !== action.payload)
            }
        case 'INC_QUANTITY':
            return {
                ...state,
                quantity:state.quantity+1
            }
        case 'DEC_QUANTITY':
            return {
                ...state,
                quantity:state.quantity-1
            }
        default:
            return state;
    }
}

export default CartReducer;
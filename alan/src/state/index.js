import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isCartOpen : false,
    cart : [],
    items : []
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: { 
        setItems : (state,action) =>{
            state.items = action.payload;
        },

        addToCart : (state,action) =>{
            const item = state.cart.find((item) => item.slug.current === action.payload.item.slug.current)
            if(!item){
                state.cart = [...state.cart, action.payload.item];
            }
        },

        removeFromCart : (state,action) =>{
            state.cart = state.cart.filter((item) => item.slug.current !== action.payload.slug.current);
        },

        increaseCount : (state,action) => {
            state.cart = state.cart.map((item) =>{
                if(item.slug.current === action.payload.slug.current){
                    item.count++;
                }
                return item
            })
        },

        decreaseCount : (state,action) => {
            state.cart = state.cart.map((item) =>{
                if(item.slug.current === action.payload.slug.current && item.count > 1){
                    item.count--;
                }
                return item
            })
        },

        setIsCartOpen: (state) =>{
            state.isCartOpen = !state.isCartOpen;
        }
    }
})

export const{
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen
} = cartSlice.actions;

export default cartSlice.reducer;
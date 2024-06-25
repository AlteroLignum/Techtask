import { CartState,ProductCart } from '@/interfaces/interfaces'
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

const isClient = typeof window !== 'undefined';

const savedCartState = isClient ? localStorage.getItem('cart') : null;

const initialState:CartState = savedCartState ? JSON.parse(savedCartState) : {
    items:[],
    totalPrice:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action:PayloadAction<ProductCart>) =>{
            const item = state.items.find(item => item.id === action.payload.id)
            if(item){
                item.quantity += 1
            }else[
                state.items.push({...action.payload,quantity: 1})
            ]
            state.totalPrice = state.items.reduce((total,item) => total + item.price * item.quantity,0 )
        },
        removeItem: (state, action: PayloadAction<ProductCart['id']>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
              if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
              } else {
                state.items.splice(itemIndex, 1);
              }
            }
          },
          deleteItem: (state, action: PayloadAction<ProductCart['id']>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
})

export const {addItem,removeItem,deleteItem,clearCart} = cartSlice.actions

export default cartSlice.reducer



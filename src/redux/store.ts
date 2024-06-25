
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cardSlice from './slices/cardSlice';
import cartSlice from './slices/cartSlice';


export function makeStore(){
    return configureStore({
        reducer:{
            card:cardSlice,
            cart:cartSlice,
        }
    })
}
export const store = makeStore()
store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


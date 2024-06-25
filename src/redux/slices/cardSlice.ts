
import { Product } from "@/interfaces/interfaces";
import { PayloadAction, createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCards = createAsyncThunk<Product[]>('collection/getAllCollection',async() =>{

    try{
        const {data} = await axios.get('https://fakestoreapi.com/products')
        return data  
    }catch(e){
        return isRejectedWithValue(e)
    }
    
})

interface CardState {
    cards: Product[];
    
}

const initialState:CardState = {

    cards:[],
    
}

const cardSlice = createSlice({
    name:'cards',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCards.fulfilled, (state,action:PayloadAction<Product[]>) =>{
            state.cards.push(...action.payload)
        });
        
    }
})


export default cardSlice.reducer
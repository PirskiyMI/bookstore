import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksBySearch } from "./searchBookThunk";
import { IBookPreview } from 'entities/book/BookPreview';
export interface IState {
    books: IBookPreview[];
    isLoading: boolean,
    error: string,
}

const initialState:IState  = {
    books: [],
    isLoading: false,
    error: '',
}

const searchBookSlice = createSlice({
    name: 'searchBook',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(fetchBooksBySearch.pending, 
            (state) => {
                state.isLoading= true;
                state.error = '';
            },
        ).addCase(fetchBooksBySearch.fulfilled, 
            (state, {payload}) => {
                state.isLoading= false;
                state.books = payload
            }
        ).addCase(fetchBooksBySearch.rejected, 
            (state, {payload}) =>{
                state.isLoading = false;
                if(payload) state.error = payload
            }
        )
    },
})


export  const searchBookAction =  searchBookSlice.actions
export const searchBookReducer = searchBookSlice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IState } from "./searchBookSlice";
import { axiosRequest } from "shared/api";

interface IResponse {
    total: string,
    page: string,
    books: IState['books']
}

export const fetchBooksBySearch = createAsyncThunk<IState['books'], string, { rejectValue: string }>('searchBook/fetchBooksBySearch', async (value, {rejectWithValue}) => {
    try {
        return await axiosRequest.get<IResponse>(`search/${value}`).then(res => res.data.books)
    }
    catch {
        return rejectWithValue('ошибка поиска книг')
    }
})
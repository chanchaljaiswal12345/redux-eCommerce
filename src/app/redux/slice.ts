import { createSlice } from '@reduxjs/toolkit'
import type { Dispatch, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { getApi } from '../services/ApiHelper';

interface ApiDataItem {

}

type ApiDataState = ApiDataItem[];

const initialState: ApiDataState = [];

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setData } = apiDataSlice.actions;

// Thunk function to fetch data using Axios
export const fetchData = (id: number) => async (dispatch: Dispatch) => {
  try {
    // const response = await axios.get(`https://dummyjson.com/products/${id}`);
    // return response
    const response = await getApi(`products/${id}`)
    return response
  } catch (error) {
    // Handle error
  }
};

export default apiDataSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrProduct:[]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProduct: (state,action)=>{
        //Lấy dữ liệu từ payload
        const arrProduct = action.payload;
        //Cập nhật lại state
        state.arrProduct=arrProduct
    }
  }
});

export const {getProduct} = productReducer.actions

export default productReducer.reducer
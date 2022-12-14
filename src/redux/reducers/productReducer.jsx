import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/tools";

const initialState = {
  arrProduct: [],
  productDetail:{}
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      //Lấy dữ liệu từ payload
      const arrProduct = action.payload;
      //Cập nhật lại state
      state.arrProduct = arrProduct;
    },
    getProductDetailAction:(state,action)=>{
      //Bước 4:Sau khi nhận được dữ liệu từ dispatch
      const productDetail=action.payload
      state.productDetail=productDetail
    }

  },
});
// --------------------action:{type,payload}-------------
export const { getProductAction,getProductDetailAction } = productReducer.actions;

export default productReducer.reducer;


// --------------------action api-------------------------

export const getProductApi = (abc) => {
  return async (dispatch) => {
    // console.log("abc", abc);
    try {
      const result = await http.get('/product') 
      const action = getProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const addProductApi = () => {
  return async (dispatch) => {
    dispatch(getProductApi());
    //dispatch=>dispatch các thunk khác liên quan
  };
};


export const getProductDetailApi=(id)=>{
  
  return async(dispatch)=>{
    //Bước 2 : thực thi thunk
    try {
      let result = await http.get(`/Product/getbyid?id=${id}`) 
      //Sau khi lấy dữ liệu từ api thành công => đưa lên reducer
      // bằng hàm dispatch2 từ thunk
      //Bước 3: Sau khi có dữ liệu=> dispatch lần 2
      const action = getProductDetailAction(result.data.content)
      dispatch(action)
     
    } catch (err) {
      console.log(err);
    }
  }
  
}
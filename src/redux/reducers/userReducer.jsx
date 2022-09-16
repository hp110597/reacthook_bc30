import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../index";
import { setCookie, setStore,ACCESS_TOKEN, getStore, setStoreJson, USER_LOGIN, getStoreJson, http } from "../../util/tools";

const initialState = {
  userLogin: getStoreJson(USER_LOGIN), //Có thể null hoặc object
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state,action)=>{
        state.userLogin = action.payload
       
    }
  },
});


export const {getProfileAction} = userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin) => {
  //{email,password}
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/signin',userLogin)
      //Sau khi đăng nhập thành công => lưu dữ liệu vào local storage hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN,result.data.content.accessToken,30)
      setStore(ACCESS_TOKEN,result.data.content.accessToken)
      //Chuyển hướng về profile hoặc trang quên mật khẩu
      history.push('/profile')
      //Sau khi đăng nhập thành công thì dispatch action getProfile
      dispatch(getProfileApi())

    } catch (err) {
        history.push('/')
      console.log(err);
    }
  };
};


export const getProfileApi = () =>{
    return async dispatch =>{
        try {
            const result = await http.post('/Users/getProfile')
              //Lấy được thông tin profile đưa lên redux
              const action = getProfileAction(result.data.content)
              dispatch(action)

              //Lưu vào storage để reload userlogin có thể lấy default từ store để không cần đăng nhập
              setStoreJson(USER_LOGIN,result.data.content)
        }catch (err){
          console.log(err);

        }
    }

}
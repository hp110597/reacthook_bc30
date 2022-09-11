import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../index";
import { setCookie, setStore,ACCESS_TOKEN, getStore, setStoreJson, USER_LOGIN, getStoreJson } from "../../util/tools";

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
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      //Sau khi đăng nhập thành công => lưu dữ liệu vào local storage hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN,result.data.content.accessToken,30)
      setStore(ACCESS_TOKEN,result.data.content.accessToken)
      //Chuyển hướng về profile hoặc trang quên mật khẩu
      history.push('./profile')
      //Sau khi đăng nhập thành công thì dispatch action getProfile
      dispatch(getProfileApi())

    } catch (err) {
        history.push('/home')
      console.log(err);
    }
  };
};


export const getProfileApi = (accessToken = getStore(ACCESS_TOKEN)) =>{
    return async dispatch =>{
        try {
            const result = await axios({
                url: "https://shop.cyberlearn.vn/api/users/getProfile",
                method: "POST",
                headers: { //header là các phần dữ liệu măc định gửi đi
                    Authorization:'Bearer '+ accessToken 
                },
              });
              //Lấy được thông tin profile đưa lên redux
              const action = getProfileAction(result.data.content)
              dispatch(action)

              //Lưu vào storage
              setStoreJson(USER_LOGIN,result.data.content)
        }catch{

        }
    }

}
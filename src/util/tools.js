import axios from "axios";

export const config = {
  setCookie: (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  getStore: (name) =>{
    if(localStorage.getItem(name)){
        return localStorage.getItem(name)
    }
        return null
  },
  setStore: (name,value)=>{
    localStorage.setItem(name,value)
  },
  setStoreJson: (name,value)=>{
    let json = JSON.stringify(value)
    localStorage.setItem(name,json)
  },
  getStoreJson: (name)=>{
    if(localStorage.getItem(name)){
        return JSON.parse(localStorage.getItem(name))
    }
    return null
  },
  ACCESS_TOKEN:'accessToken',
  USER_LOGIN:'userLogin'
};

export const { setCookie, getCookie,getStore,setStore,setStoreJson,getStoreJson,ACCESS_TOKEN,USER_LOGIN } = config;

const DOMAIN = 'https://shop.cyberlearn.vn/api'

// Cấu hình request cho tất cả api-response cho tất cả kết quả từ api trả về

//Cấu hình domain gửi đi
export const http = axios.create({
  baseURL:DOMAIN,
  timeout:30000 //timeout để hủy request, cho các request khác thực thi
})


http.interceptors.request.use(
  config => {
    const token = getStore(ACCESS_TOKEN)
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)


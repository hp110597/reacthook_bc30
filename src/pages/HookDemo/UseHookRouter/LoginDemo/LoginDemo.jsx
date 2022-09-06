import React,{useRef} from "react";
import {useNavigate} from 'react-router-dom'

export default function LoginDemo(props) {
  const navigate = useNavigate();
  // console.log(props)
  const userLoginRef = useRef({
    userName: "",
    passWord: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit =  (e) => {
    e.preventDefault(); //Chặn reload browser
    console.log(userLoginRef.current);
    let promise = new Promise((resolve,errorFunction) => {
      setTimeout(() => {
        console.log("Đăng nhập api");
        if (userLoginRef.current.userName=='phanquochuy'){
        resolve("Đăng nhập thành công");
        }else{
            errorFunction('Đăng nhập thất bại')
        }
      }, 3000);
    });
 
    promise.then(result=>{
        navigate('/')
    })
    promise.catch(err=>{
        navigate('/reduxfbapp')
    })
    //Có replace : là k lưu lại lịch sử khi back trang
    //Không có replace là lưu lại lịch sử khi back trang
    // history.push('/');
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input className="form-control" id="userName" onChange={handleChange} />
      </div>
      <div className="form-group">
        <p>password</p>
        <input className="form-control" id="passWord" onChange={handleChange} />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}

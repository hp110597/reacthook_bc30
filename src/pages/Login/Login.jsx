import React from "react";
import { useFormik } from "formik";
import {useDispatch} from 'react-redux'
import * as Yup from "yup";
import { loginApi } from "../../redux/reducers/userReducer";

export default function Login(props) {
    const dispath = useDispatch()
  // console.log(123);
  //Lấy dữ liệu từ form
  const frm = useFormik({
    
    initialValues: {
      //Dữ liệu ban đầu mặc định của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      //check validation
      email: Yup.string().required("Email không được bỏ trống").email('email không đúng định dạng'),
      password: Yup.string().required("Password không được bỏ trống").min(1,'pass từ 1-32 kí tự').max(32,'pass từ 1-32 kí tự')
    //   .matches(chuoi_regex,'password không đúng định dạng'),
    }),
    onSubmit: (values) => {
    //   console.log(values);
    // const action = loginApi(values)
    dispath(loginApi(values))
  
    },
  });

  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
         {frm.errors.email?<span className="text-danger">{frm.errors.email}</span>:''}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
         {frm.errors.password?<span className="text-danger">{frm.errors.password}</span>:''}

      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}

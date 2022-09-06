import React, { useRef } from "react";
import { useState } from "react";

/*
 * useState lấy giá trị input => khi có tính năng chỉnh load lại form trên cùng giao diện, ví dụ edit,validation
    useRef sử dụng đối với from không bao gồm chỉnh sửa load lại
    và useRef lưu lại giá trị sau các lần render
 * 
 */

export default function UseRefDemo(props) {
  const userLoginRef = useRef({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    userLoginRef.current[id] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLoginRef.current);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>username</p>
        <input className="form-control" id="username" onInput={handleChange} />
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          id="password"
          type="password"
          onInput={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Login</button>
      </div>
    </form>
  );
}

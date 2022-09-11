import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to='/'>
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logindemo">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login (Authorization-token)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/antd">
                AntD demo
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/usestate">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  UseEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  UseCallback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  UseMemo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  UseRef
                </NavLink>
                <NavLink className="dropdown-item" to="/useredux">
                  Demo Redux (number)
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxfbapp">
                  Redux facebook app
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  UseRoute (custom hook)
                </NavLink>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function DemoUseSearchParams(props) {
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let [arrProduct, setArrProduct] = useState([]);
  let timeoutRef = useRef({});

  const getProductByKeyword = async () => {
    try {
      //Lấy keyword từ url: url?keyword=abc
      let keyword = searchParams.get("keyword");
      if (keyword.trim() !== "" && keyword !== null) {
        let result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
          method: "GET",
        });
        console.log(result.data.content);
        setArrProduct(result.data.content);
        clearTimeout(timeoutRef.current);
      }else{
        setArrProduct([])
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //call api
    getProductByKeyword();
  }, [keywordRef.current]);

  const handleChange = (e) => {
    keywordRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSearchParams({ keyword: keywordRef.current });
  };

  const renderProductByKeyword = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <img src={item.image} className="w-100" />
          <div className="card-body">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <NavLink className="btn btn-success" to={`/detail/${item.id}`}>
              View Detail
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">{renderProductByKeyword()}</div>
      </div>
    </form>
  );
}

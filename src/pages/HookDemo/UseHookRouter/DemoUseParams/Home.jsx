import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getProduct } from "../../../../redux/reducers/productReducer";



export default function Home() {
  // const [arrProduct, setArrProduct] = useState([]);
  //Sử dụng useSelector lấy dữ liệu từ redux về
  const {arrProduct} = useSelector(state=>state.productReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  //call api
  const getAllProductApi = async ()=>{
    try{
      const result = await axios({
        url:'https://shop.cyberlearn.vn/api/product',
        method:'get'
      })
      //Sau khi lấy dữ liệu từ api => setState cho arrProduct
      // setArrProduct(result.data.content)
      /*
        Dạng 1: action là object
        action = {
          type:'',
          payload:''
        }
        Dạng 2: action là callback function
        action = (dispatch2) =>{
          //call api a
          //call api b
          action = {
          type:'',
          payload:''
        }
        dispatch2(action)
        }
       */
      const action = getProduct(result.data.content)
      dispatch(action)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getAllProductApi()
  },[])

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-body bg-dark text-white">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <NavLink className="btn btn-secondary" to={`/detail/${item.id}`}>
                View Detail
              </NavLink>
              <button
                className="mx-2 btn btn-success"
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Shoes app</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetailApi } from "../../../../redux/reducers/productReducer";

export default function Detail() {
  // const [productDetail, setProductDetail] = useState({});
  const {productDetail} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const params = useParams();
  console.log(params,'xuat params');

  // console.log(productDetail);
 
  useEffect(() => {
    let { id } = params;
    //Dispatch action thunk
    //Bước 1: Dispatch action thunk
    const action = getProductDetailApi(id)
    dispatch(action)
  }, [params.id]);
  
  return (
    <div className="container">
      <h3>Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={productDetail.image} alt={productDetail.name} />
        </div>
        <div className="col-4">
          <h1>{productDetail.name}</h1>
        </div>
        <h3>Related Product</h3>
        <div className="row mt-2">
          {/* Toan tu ? : optional chaining */}
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={item.name} />
                  <div className="card-body bg-dark text-white">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink
                      className="btn btn-secondary"
                      to={`/detail/${item.id}`}
                    >
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

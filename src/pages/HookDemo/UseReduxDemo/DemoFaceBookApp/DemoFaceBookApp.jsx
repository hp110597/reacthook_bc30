import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../../redux/reducers/facebookReducer";

export default function DemoFaceBookApp(props) {
  const { arrComment } = useSelector((state) => state.facebookReducer);
  const userComment = useRef({name:'',content:''})
  const dispatch = useDispatch()

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-2">
            <img
              src={`https://i.pravatar.cc?u=${comment.name}`}
              alt="avatar"
              className="w-100"
            />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };

  const handleChangeInput=(e)=>{
    const {id,value} = e.target
    userComment.current[id]=value
    console.log(userComment.current);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    //Đưa dữ liệu lên redux

    //Cách 1:Tự tạo action
    // const action={
    //     type:'facebookReducer/addComment',
    //     payload:123
    // }
    // dispatch(action)

    //Cách 2: Dùng action creator của reduxSlice
    const action = addComment(userComment.current)
    dispatch(action)

  }

  return (
    <div className="container">
      <h3>Demo facebook app</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>
        <div className="card-body">
          <form className="frm" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>name</p>
              <input id="name" className="form-control" onInput={handleChangeInput}/>
            </div>
            <div className="form-group">
              <p>content</p>
              <input id="content" className="form-control"  onInput={handleChangeInput}/>
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

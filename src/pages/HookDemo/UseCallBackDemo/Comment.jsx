import React, { memo } from "react";

function Comment(props) {
  return (
    <div className="mt-2">
      {props.renderLike()}
      <textarea className="form-control"></textarea> <br />
      <button className="btn btn-success">Gửi</button>
    </div>
  );
}

export default memo(Comment);


//Tương tự PureComponent
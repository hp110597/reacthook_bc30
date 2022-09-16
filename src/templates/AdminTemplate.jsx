import React from 'react'

export default function AdminTemplate(props) { //props.Component
  return (
    <div >
        <div className="d-flex" style={{minHeight:'100vh'}}>
            <div className="menu w-25 bg-dark text-light pt-5">
                <nav className='d-flex flex-column '>
                    <a href="#">Quản lí người dùng</a>
                    <a href="#">Quản lí sản phẩm</a>
                </nav>
            </div>
            <div className="content w-75">
                <props.Component/>
                {/* {props.Component} */}
            </div>
        </div>

    </div>
  )
}


/**
 *  2 Cách truyền dạng component và thẻ
 * Component React.FC = (props)=> {return jsx} => <Thẻ/>
 * 
 * Element.jsx = <Div/>,  <Component />=> {}
 */
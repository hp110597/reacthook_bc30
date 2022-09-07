import {DatePicker,Button} from 'antd'

import React from 'react'

export default function AntdDemo(props) {
  return (
    <div className='container'>
        Demo antd
        <div>
            <DatePicker/>
            <br />
            <Button size='large' block='true'>Button click</Button>
        </div>
    </div>
  )
}

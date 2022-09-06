import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { changeNumber } from '../../../../redux/reducers/numberReducer'


export default function DemoNumber() {

    const number = useSelector((state)=>state.number)
    const dispatch = useDispatch()


  return (
    <div className='container'>
        <h3>Number:{number}</h3>
        <button className='btn btn-success' onClick={()=>{
          
            // const action = changeNumber(number+1)
            const action = {
              type:'numberReducer/changeNumber',
              payload:number+1
            }
            dispatch(action)
        }}>+</button>


    </div>
  )
}

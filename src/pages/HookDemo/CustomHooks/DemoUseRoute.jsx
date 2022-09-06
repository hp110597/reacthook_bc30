import React from 'react'
import {useNavigate,useSearchParams,useParams, useRoutes} from 'react-router-dom'

export default function DemoUseRoute() {
const {navigate,searchParams,params} = useRoutes();
const [search,setSearch]  = searchParams
  return (
    <div>DemoUseRoute</div>
  )
}

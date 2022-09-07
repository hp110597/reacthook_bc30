import React from 'react'
import {useNavigate,useSearchParams,useParams} from 'react-router-dom'
import useRoutes from '../../../hooks/useRoutes';

export default function DemoUseRoute() {
  // const routes = useRoutes()
  // console.log(routes);
const {navigate,searchParams,params} = useRoutes(123);
const [search,setSearch]  = searchParams
console.log({navigate,searchParams,params});
  return (
    <div>DemoUseRoute</div>
  )
}

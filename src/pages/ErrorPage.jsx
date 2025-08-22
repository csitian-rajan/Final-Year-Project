import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{
    const error =useRouteError();
    console.log(error);
    return <>
<h1>Error page</h1>
  <p>{error.data}</p>
  <NavLink to={"/"}> <button>Go Home</button></NavLink>
    </>
}
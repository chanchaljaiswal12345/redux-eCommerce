"use client"

import { useDispatch, useSelector } from "react-redux"
import { data } from "../redux/slice"
import { IProductList } from "../productlist/page"
import { useEffect } from "react"

const CustomButton = ({apidata}:any) => {
    const dispatch=useDispatch()
    const changeData=()=>{
     dispatch(data(apidata))
     localStorage.setItem("item",JSON.stringify(apidata))
    }
    return (
        <>
        <button onClick={changeData}>Buy now</button>
        </>
    )
}

export default CustomButton
"use client"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { data } from './redux/slice'
import Productlist from './productlist/page'
import Link from 'next/link'

export default function Home() {
  const reduxData=useSelector((state:any)=>state?.newData)
  console.log(reduxData)
  const dispatch=useDispatch()
  const changeData=()=>{
   dispatch(data([{name:"chanchal jaiswal",id:"2"}]))
         
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
    Testiing
    {/* <Productlist/> */}
    {/* <button onClick={changeData}>changeDATA</button> */}
    <Link href="/productlist">Productlist</Link>
    </div>
  )
}

"use client"

import { fetchData } from "../../redux/slice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

 function SelectedItem(props){
  const dispatch = useDispatch()
  const [dataObject, setDataObject] = useState({})

 const apidata:any=localStorage.getItem("item")
 const finalData=JSON.parse(apidata)


 useEffect(() => {
 getData()
 },[])


 const getData = async () => {
  const id = props.params.slug
  const data = await dispatch(fetchData(id))
  console.log(data)
  setDataObject(data)
 }
 
    return(
        <>
        {/* {console.log(dataObject)} */}
        {/* {console.log(props.params.slug)} */}
        <h2 className="mt-2 mb-2 font-bold text-2xl font-Headingg text-center">
        <h1> welcome to stackInfinte </h1>
          </h2>
          <h1>{dataObject.id}</h1>
          <p>{dataObject.description}</p>
          <div className=" ">
                <a href="#">
                  {" "}
                  <img
                    src={dataObject.thumbnail}
                    width="30%"
                    className="h-56"
                    alt="image"
                  />
                </a>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Description: {dataObject.description}
                </h5>

                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  title : {dataObject.title}
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  price : {finalData.price}
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  brand : {dataObject.brand}
                </p>
              </div>
        </>
    )
}
export default SelectedItem
"use client"
import Image from "next/image";
import CustomButton from "../components/custombutton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getApi } from "../services/ApiHelper";
// import { GetServerSideProps } from "next"

export interface IProductList {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  // images: string[]
}

export interface IData {
  products: IProductList;
}
async function ProductList() {
  // const data = await fetch("https://dummyjson.com/products");
  // const response: IData = await data.json();
  // return response.products;

  const data = await getApi("products")
  console.log(data.products)
  return data.products
}


export default function Page() {

  const [productlist, setproductlist] = useState()
  const changeData = (item: IProductList) => {

    localStorage.setItem("item", JSON.stringify(item))
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await ProductList();
    setproductlist(data)
    console.log(data)
  }

  return (
    <div>
      <div className="flex flex-wrap container mx-auto p-6 ">
        {productlist?.map((item) => (
          <>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10 h-">

              <div className=" ">
                <a href="#">
                  {" "}
                  <img
                    src={item.thumbnail}
                    width="100%"
                    className="h-56"
                    alt="image"
                  />
                </a>
                {/* </div> */}
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Description: {item.description}
                </h5>

                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  title : {item.title}
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  price : {item.price}
                </p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                  {" "}
                  brand : {item.brand}
                </p>
              </div>
              <div className="mb-2">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <button onClick={() => changeData(item)}>
                    <Link href={`/selecteditem/${item.id}`}>
                      View Details
                    </Link>

                  </button>

                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex mx-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <CustomButton apidata={item} />
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              {/* <CustomButton apidata={item}/> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

// import Image from "next/image"
// import CustomButton from "../components/custombutton"
// import Link from "next/link"
// // import { GetServerSideProps } from "next"

// export interface IProductList {
//   id: number,
//   title: string,
//   description: string,
//   price: number,
//   discountPercentage: number,
//   rating: number,
//   stock: number,
//   brand: string,
//   category: string,
//   thumbnail: string,
//   // images: string[]
// }

//  export interface IData {
//     products : IProductList
// }
// async function  ProductList (){
//   const data = await fetch("https://dummyjson.com/products")
//    const response:IData = await data.json()
//   return response.products
// }

// export default async function Page() {
//   const productlist:IProductList[] = await ProductList()
//   console.log(productlist)

//   return (
//     <div>
//     {productlist?.map((item)=>(
// <>
// <h1>{item.id}</h1>
// <Link href={`/selecteditem/${item.category}`}>tEST</Link>

// <img src={item.thumbnail} width={100} height={100} alt="mage"/>
// <p>{item.price}</p>
// {/* <button onClick={() => console.log(item.id)}>Buy now </button> */}
// <CustomButton apidata={item}/>
// </>
//     )

//   )}
//     </div>
//   )
// }

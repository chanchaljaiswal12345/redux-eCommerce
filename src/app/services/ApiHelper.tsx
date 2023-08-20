import axios from "axios";
import { UrlConstants } from "../Constants/UrlConstants";

const BASE_URL = UrlConstants.BASE_URL
export async function getApi(url:string){
     const data = await axios.get(BASE_URL+url).then((response) => {
       return response 
    }).catch((error) => {
        console.log(error)
    }) 
    return data.data
   
}
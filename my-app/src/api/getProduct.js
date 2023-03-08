import { instance } from "./config";
export const getProduct=()=>{
    const url=`/products`;
    return instance.get(url);
}
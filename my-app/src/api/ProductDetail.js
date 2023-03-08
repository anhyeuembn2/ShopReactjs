import { instance } from "./config";
export const ProductDetails=(id)=>{
    const url=`/products/${id}`;
    return instance.get(url);
}
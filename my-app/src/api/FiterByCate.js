import { instance } from "./config";
export const FilterByCate=(categoryId)=>{
    const url=`/categories/${categoryId}/products`;
    return instance.get(url);
}
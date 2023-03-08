import { instance } from "./config";
export const List=()=>{
    const url='/products';
    return instance.get(url);
}
export const Read=(id)=>{
    const url=`/products/${id}`;
    return instance.get(url);

}
export const Add=(ele)=>{
    const url=`/products`;
    return instance.post(url,ele);
}
export const Remove=(id)=>{
    const url=`/products/${id}`;
    return instance.delete(url);
}
export const Update=(ele)=>{
    const url=`/products/${ele.id}`;
    return instance.put(url,ele);
}
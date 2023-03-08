import { instance } from "./config";
export const Singup1=(user)=>{
    const url=`/register`;
    return instance.post(url,user);
}
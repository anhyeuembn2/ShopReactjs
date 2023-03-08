import { instance } from "./config";
export const Singin1=(user)=>{
    const url=`/login`;
    return instance.post(url,user);
}
import React from 'react'
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';
const ProductAdd = () => {
    const {register,handleSubmit}=useForm();
    const dispatch=useDispatch();
    const onSubmit=data=>{
       dispatch(addProduct(data));
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <input className='border border-black' {...register("name")} placeholder="Tên sản phẩm" />
       <input className='border border-black'  {...register("price")} placeholder="Giá sản phẩm"/>
       <button>Thêm sản phẩm</button>
    </form>
  )
}

export default ProductAdd

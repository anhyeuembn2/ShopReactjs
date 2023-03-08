import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../api/ProductDetail';
const ProductDetail = () => {
   const {id}=useParams();
   const [product,setProduct]=useState();
   useEffect(()=>{
       const getProductDetail=async()=>{
           const {data}=await ProductDetails(id);
           setProduct(data);
       }
       getProductDetail();
   },[id])  
   
  return (
    <div>
      hihi
    </div>
  )
}

export default ProductDetail

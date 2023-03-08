import React,{useState,useEffect} from 'react'
import {useParams } from 'react-router-dom';
import {FilterByCate} from '../api/FiterByCate';
import { Link } from 'react-router-dom';
const Product = () => {
     const {id}=useParams();
     const [product,setProduct]=useState([]);
     console.log(id);
     useEffect(()=>{
         const getProduct=async()=>{
             const {data}=await FilterByCate(id);
             setProduct(data);
             console.log(data);
         }
         getProduct();
     },[id])
    return (
        <div>
             <div className='grid grid-cols-4 gap-8 '>
                {product.map((product) => (
                    <div key={product.id} className="border border-gray-200 h-[350px]">
                        <Link to={`/products/${product.id}`} className="text-center font-bold flex items-center justify-center">{product.name}</Link>
                        <Link to={`/products/${product.id}`}> <img src={product.image} alt="" className='w-[118px] h-[200px] mx-auto' /></Link>
                        <p className='font-bold text-center'>{product.price}</p>
                        <p className='font-bold text-center'>{product.description.substring(0,20)}</p>
                        <button className='w-[100px] h-[40px] bg-red-600 my-4 text-white  flex justify-center items-center  mx-auto'><Link to='/cart'>Add To Cart</Link></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product

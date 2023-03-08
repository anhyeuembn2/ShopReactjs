import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getProduct } from './ProductSlice';
const Product = () => {
    const dispatch=useDispatch();
    const products=useSelector(data=>{
        return data.product.value;
    });
    console.log(products);
    useEffect(()=>{
      dispatch(getProduct({name:"Trieu",age:18}))
    },[])
  return (
    <div>
      {products?.map(item=>(
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  )
}

export default Product

import React, { useState, useEffect } from 'react'
import { getProduct } from '../api/getProduct';
import { Link,useNavigate } from 'react-router-dom';
const Home = () => {
    const [product, setProduct] = useState([]);
    const navigate=useNavigate();
    const getProductss = async () => {
        const { data } = await getProduct();
        console.log(data);
        setProduct(data);
    }
    useEffect(() => {
        
        getProductss();
    }, [])
   
    return (
        <div className='w-full '>
            <div className='grid grid-cols-4 gap-8 '>
                {product.map((product) => (
                    <div key={product.id} className="border border-gray-200 h-[350px]">
                        <Link to={`/products/${product.id}`} className="text-center font-bold flex items-center justify-center">{product.name}</Link>
                        <Link to={`/products/${product.id}`}> <img src={product.image} alt="" className='w-[118px] h-[200px] mx-auto' /></Link>
                        <p className='font-bold text-center'>{product.price}</p>
                        <p className='font-bold text-center'>{product.description.substring(0,20)}</p>
                        <button onClick={()=> navigate("/cart")} className='w-[100px] h-[40px] bg-red-600 my-4 text-white  flex justify-center items-center  mx-auto'><Link to={'/cart'}>Add To Cart</Link></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

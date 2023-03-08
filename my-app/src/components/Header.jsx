import React, { useState, useEffect } from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import logo from '../assets/logo_tea.jpg';
import Search from './Search';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCategories } from '../api/Categories';

const Header = () => {
  const [cate, setCate] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await getCategories();
      setCate(data);
    }
    getData();
  }, []);
  return (
   
 <div className='mb-[40px]'>
 <div className='flex justify-between items-center mt-[-10px]'>
   <div className='w-[60%]'>
     <NavLeft />
   </div>
   <div>
     <NavRight />
   </div>

 </div>
 <div className='w-full flex '>
   <div className='w-[20%]'>
     <Link to="/"><img src={logo} alt="" className='w-[162px] h-[50px] ' /></Link>
   </div>
   <div className='w-[60%] ml-[20px]'>
     <Search />
     {cate && cate.map((item) => (
       <Link to={`${item.name}/${item.id}/products`} key={item.id} className="text-white px-3 ">{item.name}</Link>
     ))}
   </div>
   <div className=' relative ml-[100px]'>
     <AiOutlineShoppingCart size={30} className="text-white" />
     <span className='absolute top-[-5px] right-[-6px] w-[20px] h-[20px] text-white bg-gray-600 rounded-3xl leading-[20px] text-center'>{cart.length}</span>
   </div>
 </div>
</div>
  )
}

export default Header
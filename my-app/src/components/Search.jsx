import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [input,setInput]=useState("");
    const navigate=useNavigate();

    console.log(input);
    const handleKeyUp=(e)=>{
        if(e.keyCode===13){
            navigate(`/search/${input}`);
            setInput("");
           
        }
    }
  return (
    <>
      <input  
      onKeyDown={handleKeyUp}
      value={input} onChange={(e)=> setInput(e.target.value)} type="text" placeholder='Nhập tìm kiếm sản phẩm' className='w-[754px] h-[40px] bg-white outline-0 p-4' />
    </>
  )
}

export default Search

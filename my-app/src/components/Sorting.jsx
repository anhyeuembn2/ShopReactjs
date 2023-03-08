import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Sorting = () => {
  const [option,setOption]=useState("");
  
  
  const optionMenu=[
    
    {
      name:"Sắp xếp tăng dần theo giá",
      value:"-sortPriceAsc"
    },
    {
      name:"Sắp xếp giảm dần theo giá",
      value:"-sortPriceDsc"
    },
    {
      name:"Sắp xếp tăng dần theo tên ",
      value:"-sortNameAsc"
    },{
      name:"Sắp xếp giảm dần theo tên",
      value:"-sortNameDsc"
    }
  ]
  const navigate=useNavigate();
  const handleSort=(e)=>{
     const {value}=e.target;
     
     navigate(`?sort=${value}`);
     setOption(value);
  }
  
  return (
    <div>
       <h2 className='font-bold text-[20px]'>Chọn chức năng sắp xếp</h2>
       <select onChange={handleSort}  value={option} className="font-bold w-[250px] h-[40px] block mr-3 border border-black">
          {optionMenu.map((item,index)=>(
             <option key={index} value={item.value} >{item.name}</option>
          ))}
       </select>
      
    </div>
  )
}

export default Sorting

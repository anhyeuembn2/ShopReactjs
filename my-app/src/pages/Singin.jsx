import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Singin1 } from '../api/Singin';
const Singin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      try{
        const { data } = await Singin1({ email, password });
        
        localStorage.setItem("user",JSON.stringify(data.user))
        if(data.user.id===1){
           navigate("/admin");
        }else{
          navigate("/");
        }
      }catch(err){
         alert(err.response.data);
      }

    
    

  }
  return (
    <div className='flex justify-center items-center h-[100vh] w-full bg-orange-300'>
      <div className='flex justify-center items-center'>
        <form action="" onSubmit={handleSubmit} className="w-[600px] h-[400px] bg-white rounded-3xl flex flex-col items-center justify-center">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Nhập email' className='border px-4 border-black w-[250px] h-[40px]' />
          <br /> <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Nhập mật khẩu' className='border px-4 border-black w-[250px] h-[40px]' />
          <div className='flex justify-center items-center'>
            <button className='w-[100px] h-[40px] bg-orange-500 border mt-8   border-black block text-white'>Đăng nhập</button>
            <Link to={'/singup'} className="font-bold text-[20px] mt-6 ml-4">Đăng kí</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Singin;

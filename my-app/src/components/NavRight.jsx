import React from 'react'
import { Link } from 'react-router-dom'
import { NavItemRight } from '../utils/Nav/NavItem'
const NavRight = () => {
  return (
    
    <>
      <div className='ml-[10px] flex items-center'>
        {NavItemRight.map((item)=>(
            <Link key={item.path}to={item.path} className="p-4 text-[16px] text-white ">
             {
                    item.icon1 ?<span className='flex items-center text-[16px]'>{item.element}{item.icon1}</span> : item.element
                }
            </Link>
        ))}
      </div>
    </>
  )
}

export default NavRight

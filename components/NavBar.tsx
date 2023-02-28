'use client'

import Image from 'next/image'
import Logo from '../public/logo.png'
import {MenuAlt3Icon, MenuAlt4Icon, SearchIcon} from '@heroicons/react/solid'

const NavBar = () => {
  return (
    <div>
    <div className='md:hidden bg-[#1D2025] p-2 border-slate-800 border border-x-0 flex justify-between items-center px-4 md:px-8'>
        
        {/* Mobile View */}

        <MenuAlt4Icon  className='h-6 w-6 text-white'/>
       <Image  src={Logo} width={60} height={60} alt='Lyrics Africa Logo' />
        <SearchIcon  className='h-6 w-6 text-white'/>
        </div>

        {/* Desktop View */}
        <div className='hidden bg-[#1D2025] p-2 border-slate-800 border border-x-0 md:flex justify-start space-x-40 items-center px-4 md:px-8'>
        
       <Image  src={Logo} width={80} height={80} alt='Lyrics Africa Logo' className='hidden md:flex'/>
        
        <div className='flex-1'>
            <form className='flex space-x-2'>
            <input 
            className='w-[90%] h-9 bg-transparent focus:outline-none placeholder-slate-500'
            placeholder='Find the lyrics to your favourite songs'/>
            <button type='submit' 
            className='bg-[#2A95D9] p-2 rounded-md font-semibold uppercase text-sm'
            >Search</button>
            </form>
        </div>

        <ul className='space-x-4 hidden md:flex'>
            <li>Home</li>
            <li>Artists</li>
            <li>Songs</li>
        </ul>

        </div>
        </div>
  )
}

export default NavBar
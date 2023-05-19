import React, { useState } from 'react'

export default function NavBar() {

  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  }

  const closeNav = () => {
    setNavOpen(false);
  }

  return (
    <div className='text-[#323437] bg-[#E2B714]'>
      <div className='flex justify-between p-6'>
        <div className='flex justify-center items-center text-3'>
          <p className=''>Mehedi</p>
          <p className='text-white'>Khan</p>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <p className='px-4 text-2'>About</p>
          <p className='px-4 text-2'>Skills</p>
          <p className='px-4 text-2'>Projects</p>
          <p className='px-4 text-2'>Contact</p>
        </div>
        <div className='md:hidden'>
          {navOpen && <i onClick={closeNav} class='pt-2 text-lg bx bx-x'></i>}
          {!navOpen && <i onClick={openNav} class='pt-2 text-lg bx bx-menu' ></i>}
        </div>
      </div>
      {navOpen && <div className='md:hidden flex flex-col justify-center items-center pb-5'>
        <p className='p-4 text-2'>About</p>
        <p className='p-4 text-2'>Skills</p>
        <p className='p-4 text-2'>Projects</p>
        <p className='p-4 text-2'>Contact</p>
      </div>}
    </div>
  )
}

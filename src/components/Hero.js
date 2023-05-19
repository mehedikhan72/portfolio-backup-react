import React from 'react'

export default function Hero() {
    const image = 'static/me.webp'
    return (
        <div className='m-2 p-2 md:m-5 md:p-5 flex flex-wrap justify-center items-center'>
            <div className='flex justify-center flex-col items-center mx-5 md:mx-10 xl:mr-24 my-5'>
                <div className='flex justify-center items-center font-bold text-3xl md:text-5xl'>
                    <p className='text-[#E2B714]'>Mehedi</p>
                    <p>Khan</p>
                </div>
                <p className='text-3 text-center'>Full stack engineer. AI & ML enthusiast.</p>
                <button className='my-btns-1'>Download Resume</button>
            </div>
            <div className='mx-5 md:mx-10 my-5 xl:ml-24'>
                <img className='w-76 h-76 md:w-[32rem] md:h-[32rem] object-cover w-' src={image} alt='Mehedi Khan' />
            </div>
        </div>
    )
}

import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 mt-6 text-lg'>My Portfolio</h4>
      <h2 className='text-center text-5xl'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Welcome to my web development portfolio! Here, you'll find a collection of my latest projects.
        that showcase my skills and expertise in creating dynamic and user-friendly web applications
        Each project reflects my commitment to quality and attention to detail, and I hope they 
        inspire you as much as they inspired me to create them. Feel free to explore and reach out 
        if you have any questions or would like to collaborate!
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-5'>
        {workData.map((project, index) => (
            <div key={index} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center
                 justify-between shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt='send-icon' className='w-5'/>
                </div>
                </div>
            </div>
        ))}
      </div>
      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
      border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'>
        show more <Image src={assets.right_arrow_bold} alt='right-arrow' className='w-4'/>
      </a>
    </div>
  )
}

export default work

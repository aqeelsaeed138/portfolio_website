import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center pt-20 md:pt-24'>
      <div> 
        <Image src={assets.profile_pic} alt='' className='rounded-full w-32' />
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-normal'>
        Hi! I am Aqeel Saeed</h3><Image src={assets.hand_icon} alt='' className='w-5 pb-3'/>  
      </div>    
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Full stack web developer based in Lahore</h1>
        <p className='max-w-2xl mx-auto'>Motivated Software Engineering student skilled in full-stack development with Next.js, React.js, Node.js,
        and Firebase. Passionate about building scalable, AI-driven apps, writing optimize code and continuously
        learning emergency technologies</p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black
            text-white flex items-center gap-2'
            >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>

            <a href="/Resume.pdf" download className='
            px-10 py-3 border rounded-full border-grey-500 flex items-center gap-2'>
                My Resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>

    </div>
  )
}

export default header

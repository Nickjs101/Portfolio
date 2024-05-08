import React from 'react'
import heroimage from '../assets/profilepic.jpg'
import {TypeAnimation} from 'react-type-animation'


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
        <div className='cols-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt='Hero Image'/>
        </div>
        <div className='cols-span-2 w-full px-5 my-auto'>
            <hi className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation sequence={[
                    "App Developer", 1000,
                    "Security Analyst", 1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}/>
            </hi>
            <p className='text-white sm:text-lg my-6 lg:text-xl w-full'>
                    My name is Nick Joshua Montemayor and I currently learning different practices in cybersecurity.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-purple-300 text-white' >
                    Download CV
                </a>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-purple-300 text-white hover:border-none'>
                    Contact
                </a>
            </div>

        </div>
    </div>
  )
}

export default Hero
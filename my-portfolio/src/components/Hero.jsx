import React from 'react'
import heroimage from '../assets/Profilepic.png'
import {TypeAnimation} from 'react-type-animation'


const Hero = () => {
  return (
    <div id='Home' className='bg-secondary-color grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 pt-[80px] md:pt-[100px]'>
        <div className='col-span-1 my-auto mx-auto h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] bg-[#0b121f] rounded-[50%] shadow-lg shadow-[#9fef00be]'>
            <img className='rounded-[50%]' src={heroimage} alt='Hero Image'/>
        </div>
        <div className='col-span-2 px-5 my-auto'>
            <hi className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation sequence={[
                    "Developer", 1000,
                    "Programmer", 1000,
                    "IT", 1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}/>
            </hi>
            <p className='text-white sm:text-lg my-6 lg:text-xl w-full'>
                My name is Nick Joshua Montemayor, a dedicated IT professional with a passion for software development, cloud computing, and cybersecurity. With expertise in C#, Java, and SQL, I bring innovative solutions to life through my projects and teaching experience.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-primary-color text-white' >
                    Download CV
                </a>
                <a href="/" className='px-6 py-3 w-full rounded-xl border border-[#9fef00be] hover:bg-[#9fef00be] text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
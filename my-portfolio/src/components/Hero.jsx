import React from 'react'
import heroimage from '../assets/Profilepic.png'
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf'
import video from '../assets/video.mp4'
import {TypeAnimation} from 'react-type-animation'


const Hero = () => {
    const gotoSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    //
  return (
    <div id='Home' className='bg-secondary-color grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 pt-[80px] md:pt-[100px]'>
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 col-span-1 my-auto mx-auto h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-[50%] shadow-lg shadow-[#9fef00be]'>
            <img className='rounded-[50%]' src={heroimage} alt='Hero Image'/>
        </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation sequence={[
                    "Software Developer", 1000,
                    "IT", 1000,
                    "Cybersecurity Enthusiast", 1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}/>
            </h1>
            <p className='text-white sm:text-lg mt-5 lg:text-xl w-full'>
                Welcome to my professional portfolio.
            </p>
            <p className='text-white sm:text-lg lg:text-xl w-full'>
                Hi, I'm Nick Joshua Montemayor. I specialize in IT Troubleshoorting & Maintenance, Software Development, and Cybersecurity. Explore my work and accomplishments below.
            </p>

            <div className='my-8'>
                <a href={resume} download className='px-6 py-3 w-full rounded-md mr-4 bg-primary-color tertiary-color' >
                    Download CV
                </a>
                <a onClick={(e) => gotoSection(e, 'contact')} href="#" className='px-6 py-3 w-full rounded-md border border-[#9fef00be] hover:bg-[#A4B1CDff] text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
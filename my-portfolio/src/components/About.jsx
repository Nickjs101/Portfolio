import React from 'react'
import aboutImg  from '../assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='text-white max-w-[1200px] mx-auto my-12'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Hello! I'm Nick Joshua Montemayor, an enthusiastic and dedicated IT professional with a strong background in software development, computer hardware services, and cloud computing. My journey in the tech world began with a BS in Information Technology from STI College-Angeles, where I honed my skills in various programming languages and technologies.
                    </p>
                </div>

            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0 shadow-md shadow-[#9fef00]' src={aboutImg} alt="About Image" width={300} height={300} />
        </div>
    </div>
  )
}

export default About
import React from 'react'
import js from '../assets/js.png'
import c from '../assets/c-sharp.png'
import java from '../assets/java.png'
import bash from '../assets/gnu-bash.png'
import php from '../assets/php.png'
import sql from '../assets/sql-server.png'
import python from '../assets/python.png'

const Skills = () => {
    const softSkills = [
        'Strong Problem-Solving Skill',
        'Troubleshooting Skill',
        'Computer Maintenance',
        'Critical Thinking Skills',
        'Analytical Skills',
        'Time Management Skills',
        'Creativity',
        'Persistence',
        'Initiative',
        'Adaptability',
        'Active Listening'
        ];
  return (
    <div id='Skills' className=' py-0 md:py-[100px] my-[100px] lg:my-[200px]'>
        <div className='bg-secondary-color border border-gray-600 text-gray-50 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
                        place-items-center md:flex md:justify-between md:items-center'>
            
            <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
                My <br /> Tech <br /> Stack
            </h2>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={js} alt="Js" />
                <p className='mt-2'>Javascript</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={c} alt="Js" />
                <p className='mt-2'>C#</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={python} alt="Js" />
                <p className='mt-2'>Python</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={java} alt="Js" />
                <p className='mt-2'>Java</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={bash} alt="Js" />
                <p className='mt-2'>Bash</p>
            </div>

            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={php} alt="Js" />
                <p className='mt-2'>PHP</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
                <img src={sql} alt="Js" />
                <p className='mt-2'>SQL</p>
            </div>
        </div>
        <div className='mx-6 mt-10'>
            <h4 className='text-3xl my-2 font-bold mx-auto text-[#9fef00] text-center'>Soft Skills</h4>
            <div className='flex flex-wrap justify-center'>
                            {softSkills.map((skill, index) => {
                                return <p key={index} className='rounded-full border border-[#9fef00] primary-color text-sm font-medium py-1 px-3 m-2'>{skill}</p>
                            })}
            </div>
        </div>
    </div>
  )
}

export default Skills
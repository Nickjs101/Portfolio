import React from 'react'
import aboutImg  from '../assets/about.jpg'

const About = () => {
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
    <div id='about' className='text-white max-w-[1200px] mx-auto my-12 pt-[100px]'>
        <h2 className='text-4xl font-bold primary-color mx-6'>
            About Me
        </h2>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <p className='text-base text-justify lg:text-lg'>
                        I am <span className="primary-color font-bold"> Nick Joshua Montemayor</span>, an IT professional from Angeles City, Pampanga, with a passion for software development, cybersecurity, and innovative technology solutions. With a strong foundation in programming and hands-on experience in developing a variety of projects, I am driven by the desire to create impactful and efficient technological solutions. My expertise spans multiple programming languages and technologies, including Java, C#, Python, and SQL, and I have successfully led and contributed to projects involving game development, AI chatbots, and mobile applications. In addition to my development skills, I excel in troubleshooting and computer maintenance, ensuring optimal performance and resolving technical issues efficiently. I am constantly seeking new challenges and opportunities to apply my skills in dynamic and growth-oriented tech environments.
                    </p>
                    
                    
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0 shadow-md shadow-[#9fef00] mt-2 md:mt-0' src={aboutImg} alt="About Image" width={300} height={300} />
            <div className='mx-6 mt-5'>
                <h4 className='text-xl my-2 font-bold'>Soft Skills:</h4>
                        <div className='flex flex-wrap'>
                            {softSkills.map((skill, index) => {
                                return <p key={index} className='rounded-lg bg-[#9fef00] tertiary-color text-sm font-medium p-1 m-2'>{skill}</p>
                            })}
                        </div>
                </div>
        </div>
    </div>
  )
}

export default About
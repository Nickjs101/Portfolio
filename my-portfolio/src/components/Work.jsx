import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import proj1 from '../assets/Works/Work1.png'
import proj2 from '../assets/Works/Work2.png'
import proj3 from '../assets/Works/Work3.png'
import { useSelector } from 'react-redux'

const Work = ({ displayProject }) => {
  const Projects = useSelector((state) => state.project.projects);
  
  return (
    <div className='max-w-[1200px] mx-auto p-5 pt-[100px]' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='my-5 flex flex-col'>
          <div className='mb-10 w-full text-center text-3xl text-white'>Software Development</div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
              <img src={proj1} alt="" />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                      justify-center items-center'> 
                <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                <div className='pt-8 text-center'>
                  <a href="/">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div> */}

            <div className='bg-fourth-color secondary-color mb-2 rounded-xl' >
              <img className='w-full h-[250px]' src={proj1} alt="" />
              <div className='p-4'>
                  <h1 className='text-white text-lg'><b>Kody's Adventure</b></h1>
                  <div className=' mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "#74C0FC"}} icon='fa-solid fa-code'/>Personal Project</div>
                  <p className='py-2 h-40 secondary-color overflow-hidden'>A 2D side-scrolling game developed in Unity using C# to teach basic Python programming.</p>
                <div className='text-[#9fef00] py-2 hover:text-[#a3ef00] '>Read More &#10095;</div>
              </div>
            </div>

            <div className='bg-fourth-color secondary-color mb-2 rounded-xl' >
              <div className='aspect-w-3 aspect-h-2'>
                <img className='w-full h-full' src={proj2} alt="" />
              </div>
              <div className='p-4'>
                  <h1 className='text-white text-lg'><b>Trade Monitoring Mobile App</b></h1>
                  <div className=' mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "#74C0FC"}} icon='fa-solid fa-code'/>Personal Project</div>
                  <p className='py-2 h-40 secondary-color overflow-hidden'>Built a mobile app for tracking trades with Java, XML, and SQLite, featuring a line graph to display trade performance.</p>
                <div className='text-[#9fef00] py-2 hover:text-[#a3ef00] '>Read More &#10095;</div>
              </div>
            </div>
            
            <div className='bg-fourth-color secondary-color mb-2 rounded-xl' >
              <img className='w-full h-[250px]' src={proj3} alt="" />
              <div className='p-4'>
                  <h1 className='text-white text-lg'><b>MyApp</b></h1>
                  <div className=' mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "#74C0FC"}} icon='fa-solid fa-code'/>Personal Project</div>
                  <p className='py-2 h-40 secondary-color overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam facere voluptate doloremque tempore sed, adipisci, deserunt dignissimos odio, nesciunt suscipit cum odit vero perspiciatis! Architecto at esse laborum voluptatibus!</p>
                <div className='text-[#9fef00] py-2 hover:text-[#a3ef00] '>Read More &#10095;</div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='mt-[100px] flex flex-col'>
            <div className='mb-10 w-full text-center text-3xl text-white'>CyberSecurity</div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {Projects.map((project, index) => (
                  <div key={index} className='p-4 bg-fourth-color secondary-color mb-2 rounded-xl' >
                      {project.image}
                      <h1 className='text-white text-lg'><b>{project.title}</b></h1>
                      <div className='mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "FFD43B"}} icon={project.icon} />{project.type}</div>
                      <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                      <div className='text-[#9fef00] py-2 hover:text-[#A4B1CDff] cursor-pointer' onClick={() => displayProject(project.component)}>Read More &#10095;</div>
                  </div>
              ))}
            </div>
        </div>


    </div>
  )
}

export default Work
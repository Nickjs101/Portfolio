import React from 'react'
import Project1 from './Project1'

const Sidebar = ({projects, currentProject,setCurrentProject}) => {
  return (
    <div>
      <div className='hidden lg:col-span-1 gap-4 lg:flex flex-wrap p-4'>
          {projects.map((project, index) => (
              <div key={index} className= {`p-4 h-[250px] md:min-w-fit lg:w-full ${project.component === currentProject? 'bg-secondary-color' : 'bg-fourth-color'}  secondary-color mb-2 rounded-xl`} onClick={() => setCurrentProject(project.component)}>
                  <h1 className='text-white'><b>{project.title}</b></h1>
                  <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                  <div className='container text-[#9fef00] py-2 hover:text-[#a3ef00] '>Read More &#10095;</div>
              </div>
          ))}
      </div>
      <div className='grid grid-cols-1 smmd:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:hidden gap-4  p-4'>
          {projects.map((project, index) => (
              <div key={index} className={`p-4 h-[250px] md:min-w-fit lg:w-full ${project.component === currentProject? 'bg-secondary-color' : 'bg-fourth-color'} secondary-color mb-2 rounded-xl`}  onClick={() => setCurrentProject(project.component)}>
                  <h1 className='text-white'><b>{project.title}</b></h1>
                  <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                  <div className='container text-[#9fef00] py-2 hover:text-[#a3ef00] '>Read More &#10095;</div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Sidebar
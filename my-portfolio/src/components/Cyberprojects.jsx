import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProject } from './subcomponents/projectSlice'
import Sidebar from './subcomponents/Sidebar'


const Cyberprojects = ({cprojectComponent, setCurrentContent}) => {
    const [currentProject, setCurrentProject] = useState(cprojectComponent);
    const Projects = useSelector((state) => state.project.projects);
    // const dispatch = useDispatch(); //adding project dispatch(addProject(THE PROJECT ARRAY));

    const gotoTop = (event, id, component) => {
      event.preventDefault();
      const section = document.getElementById(id);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setCurrentProject(component);
      }
    }

    useEffect((e) => {
      const section = document.getElementById('Content');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
    }, [])
  return (
    <div>
      <div className='sticky bg-secondary-color top-0 left-0 z-50'>
              <div className='text-gray-400 h-[70px] max-w-[1200px] mx-auto flex justify-between items-center'>
                  <h1 className='text-3xl font-bold primary-color ml-4 cursor-pointer' onClick={() => setCurrentContent('Main')}>&#10094; Nick.Js</h1>
              </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1200px]">
          <div id='Content' className="col-span-1 lg:col-span-2 p-4 text-white bg-secondary-color">
              {currentProject}
          </div>
          <Sidebar projects={Projects} currentProject={currentProject} setCurrentProject={gotoTop} />
      </div>
    </div>
  )
}

export default Cyberprojects
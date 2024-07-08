import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProject } from './subcomponents/projectSlice'
import Sidebar from './subcomponents/Sidebar'


const Cyberprojects = ({cprojectComponent, setCurrentContent}) => {
    const [currentProject, setCurrentProject] = useState(cprojectComponent);
    const Projects = useSelector((state) => state.project.projects);
    // const dispatch = useDispatch(); //adding project dispatch(addProject(THE PROJECT ARRAY));
    // const Projects = [
    //     {title: 'File Permissions in Linux', description: 'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.', component: <Project1/>},
    //     {title: 'Apply Filters to SQL Queries', description: 'My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.', component: <Project2/>},
    //     {title: 'Vulnerability Assessment Report', description: 'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.', component: <Project3/>},
    //     {title: 'Security Audit Report', description: 'Audit', component: <Project4/>},
    //     {title: 'Incident Report Analysis', description: 'The company recently experienced a DDOS attack that compromised the internal network for two hours until it was resolved. During the attack the organization’s network services suddenly stopped responding due to an incoming flood of ICMP packets. Normal internal network traffic could not access any network resources.', component: <Project5/>}
    // ];
  return (
    <div>
      <div className='sticky bg-secondary-color top-0 left-0 z-50'>
              <div className='text-gray-400 h-[70px] max-w-[1200px] mx-auto flex justify-between items-center'>
                  <h1 className='text-3xl font-bold primary-color ml-4' onClick={() => setCurrentContent('Main')}>Nick.Js</h1>
              </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1200px]">
          <div className="col-span-1 lg:col-span-2 p-4 text-white bg-secondary-color">
              {currentProject}
          </div>
          <Sidebar projects={Projects} currentProject={currentProject} setCurrentProject={setCurrentProject} />
      </div>
    </div>
  )
}

export default Cyberprojects
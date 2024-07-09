import React from 'react';
import img1 from '../assets/Works/Work1.png';
import img2 from '../assets/Works/Work2.png';
import img3 from '../assets/Works/Work3.png';

const Experience = () => {
  const myExperiences = [
    {
      swap: true,
      company: 'SYLLABUS Inc. (STI College-Angeles)',
      position: 'IT Instructor',
      date: 'Aug 2023 - Jun 2024',
      tasks: [
        {header: 'Curriculum Development:',info: 'Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer Graphics, Game Development, and Human-Computer Interaction, ensuring alignment with industry standards and best practices.'},
        {header: 'Project Supervision:',info: 'Guided students in creating innovative web portfolios, programming projects, and capstone projects, fostering critical thinking and problem-solving skills.'},
        {header: 'Technical Workshops:',info: 'Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like Unity, Android Studio, and various programming languages.'},
        {header: 'Mentorship:',info: 'Acted as a mentor and advisor for students, assisting them in navigating academic challenges and career planning.'},
        {header: 'Panelist & Judge:',info: 'Served as a panelist in IT students\' thesis defenses, providing constructive feedback and assessing project viability and innovation.'}
      ],
      img: img1
    },
    {
      swap: false,
      company: 'Fusion Manpower (Jollibee)',
      position: 'Service Crew',
      date: 'Jul 2019 - Sep 2019',
      tasks: [
        {header: 'Customer Service Excellence:',info: 'Delivered exceptional customer service, ensuring a positive dining experience and maintaining high satisfaction rates.'},
        {header: 'Operational Efficiency:',info: 'Assisted in various operational tasks, including food preparation, order management, and cleanliness maintenance, contributing to a well-organized and efficient work environment.'}
      ],
      img: img2
    },
    {
      swap: true,
      company: 'PC Bytes',
      position: 'IT Technician',
      date: 'Oct 2018 - Dec 2018',
      tasks: [
        {header: 'Technical Support:',info: 'Provided comprehensive IT support to clients, including hardware troubleshooting, system diagnostics, and software installation.'},
        {header: 'System Maintenance:',info: 'Performed routine maintenance on computer systems, ensuring optimal performance and reliability.'},
        {header: 'Customer Service:',info: 'Engaged with clients to understand their technical needs, offering tailored solutions and fostering positive client relationships.'},
        {header: 'Network Configuration:',info: 'Set up and configured local area networks (LAN), optimizing connectivity and security.'}
      ],
      img: img3
    },
  ];

  return (
    <div id='Experience' className='max-w-[1200px] mx-auto pt-[100px] pb-[50px]'>
      <div className='primary-color text-4xl font-bold text-center w-full mb-8'>Professional Experience</div>
      {myExperiences.map((experience, index) => (
      <div key={index}>
        <div className='w-full grid md:hidden grid-cols-5 items-center pr-6'>

          <div className='col-span-1 flex flex-col h-full items-center mx-8'>
            <div className='w-1 flex-grow bg-primary-color'></div>
            <div className='w-5 h-5 rounded-full bg-primary-color'></div>
            <div className='w-1 flex-grow bg-primary-color'></div>
          </div>

          <div className='col-span-4 flex flex-col h-full items-center my-8'>
            <div className='col-span-2 flex justify-center items-center'>
              <img src={experience.img} alt='Experience' className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='bg-fourth-color w-full rounded-lg secondary-color p-4 col-span-2 flex flex-col justify-between'>
              <div>
                <div className='text-lg font-bold'>{experience.company}</div>
                <div className='text-sm'>{experience.position}</div>
                <div className='text-sm italic mb-2'>{experience.date}</div>
                <ul className='list-disc list-inside'>
                  {experience.tasks.map((task, i) => (
                    <li key={i} className='text-sm'><b className='font-semibold'>{task.header}</b>{task.info}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className='hidden md:grid w-full h-auto grid-cols-5 items-center'>
          <div className={`${experience.swap? 'hidden': 'block'} bg-fourth-color rounded-lg secondary-color p-4 col-span-2 flex flex-col justify-between`}>
            <div>
              <div className='text-lg font-bold'>{experience.company}</div>
              <div className='text-sm'>{experience.position}</div>
              <div className='text-sm italic mb-2'>{experience.date}</div>
              <ul className='list-disc list-inside'>
                {experience.tasks.map((task, i) => (
                  <li key={i} className='text-sm'><b className='font-semibold'>{task.header}</b>{task.info}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${experience.swap? 'block': 'hidden'} col-span-2 flex justify-center items-center`}>
            <img src={experience.img} alt='Experience' className='w-full h-full object-cover rounded-lg' />
          </div>

          <div className='col-span-1 flex flex-col h-full items-center mx-8'>
            <div className='w-1 flex-grow bg-primary-color'></div>
            <div className='w-5 h-5 rounded-full bg-primary-color'></div>
            <div className='w-1 flex-grow bg-primary-color'></div>
          </div>
          
          <div className={`${experience.swap? 'block': 'hidden'} bg-fourth-color rounded-lg secondary-color p-4 col-span-2 flex flex-col justify-between`}>
            <div>
              <div className='text-lg font-bold'>{experience.company}</div>
              <div className='text-sm'>{experience.position}</div>
              <div className='text-sm italic mb-2'>{experience.date}</div>
              <ul className='list-disc list-inside'>
                {experience.tasks.map((task, i) => (
                  <li key={i} className='text-sm'><b className='font-semibold'>{task.header}</b>{task.info}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${experience.swap? 'hidden': 'block'} col-span-2 flex justify-center items-center`}>
            <img src={experience.img} alt='Experience' className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Experience;

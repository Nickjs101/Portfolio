import React from 'react';
import img1 from '../assets/Works/Work1.png';
import img2 from '../assets/Works/Work2.png';
import img3 from '../assets/Works/Work3.png';

const Experience = () => {
  const myExperiences = [
    {
      company: 'SYLLABUS Inc. (STI College-Angeles)',
      position: 'IT Instructor',
      date: 'Aug 2023 - Jun 2024',
      tasks: [
        'Taught courses such as Computer Programming, Computer Graphics, Game Development, and more.',
        'Guided students in creating web portfolios, programming projects, and capstone projects.',
        'Organized events and served as a panelist in IT students\' thesis defenses.'
      ],
      img: img1
    },
    {
      company: 'Fusion Manpower (Jollibee)',
      position: 'Service Crew',
      date: 'Jul 2019 - Sep 2019',
      tasks: [
        'Served customers and ensured satisfaction.',
        'Maintained cleanliness and prepared essential meal components.'
      ],
      img: img2
    },
    {
      company: 'PC Bytes',
      position: 'IT Technician',
      date: 'Oct 2018 - Dec 2018',
      tasks: [
        'Built and troubleshoot computers for clients.',
        'Installed operating systems and applications.'
      ],
      img: img3
    },
  ];

  return (
    <div className='max-w-[1200px] mx-auto bg-slate-900 pt-[100px] pb-[50px]'>
      <div className='primary-color text-4xl font-bold text-center w-full mb-8'>Professional Experience</div>
      {myExperiences.map((experience, index) => (
        <div key={index} className='flex justify-center items-center'>
          <div className='bg-slate-400 p-4 w-[300px] h-[300px] flex flex-col justify-between'>
            <div>
              <div className='text-lg font-bold'>{experience.company}</div>
              <div className='text-sm'>{experience.position}</div>
              <div className='text-sm italic mb-2'>{experience.date}</div>
              <ul className='list-disc list-inside'>
                {experience.tasks.map((task, i) => (
                  <li key={i} className='text-sm'>{task}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex flex-col h-full items-center mx-8'>
            <div className='w-1 h-[150px] bg-slate-500'></div>
            <div className='w-5 h-5 rounded-full bg-primary-color'></div>
            <div className='w-1 h-[150px] bg-slate-500'></div>
          </div>
          <div className='w-[300px] h-[300px]'>
            <img src={experience.img} alt='Experience' className='w-full h-full object-cover' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

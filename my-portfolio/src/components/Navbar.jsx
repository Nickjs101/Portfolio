import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const gotoSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    //
    return (
        <div className='sticky bg-secondary-color top-0 left-0 z-50'>
            <div className='text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
                <h1 className='text-3xl font-bold primary-color ml-4'onClick={(e) => gotoSection(e, 'Home')}>Nick.Js</h1>
                <ul className='hidden md:flex'>
                    <li className='p-5'><a href="#Home" onClick={(e) => gotoSection(e, 'Home')}>Home</a></li>
                    <li className='p-5'><a href="#Skills" onClick={(e) => gotoSection(e, 'Skills')}>Skills</a></li>
                    <li className='p-5'><a href="#Certifications" onClick={(e) => gotoSection(e, 'Certifications')}>Certifications</a></li>
                    <li className='p-5'><a href="#about" onClick={(e) => gotoSection(e, 'about')}>About</a></li>
                    <li className='p-5'><a href="#work" onClick={(e) => gotoSection(e, 'work')}>Work</a></li>
                    <li className='p-5'><a href="#contact" onClick={(e) => gotoSection(e, 'contact')}>Contact</a></li>
                </ul>

                <div onClick={handleNav} className='block md:hidden mr-6'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='text-3xl font-bold primary-color ml-6 mt-6'>Nick.Js</h1>
                    <ul className='p-8 text-2xl'>
                        <li className='p-2'><a href="#Home" onClick={(e) => {gotoSection(e, 'Home'); handleNav();}}>Home</a></li>
                        <li className='p-2'><a href="#Skills" onClick={(e) => {gotoSection(e, 'Skills'); handleNav();}}>Skills</a></li>
                        <li className='p-2'><a href="#Certifications" onClick={(e) => {gotoSection(e, 'Certifications'); handleNav();}}>Certifications</a></li>
                        <li className='p-2'><a href="#about" onClick={(e) => {gotoSection(e, 'about'); handleNav();}}>About</a></li>
                        <li className='p-2'><a href="#work" onClick={(e) => {gotoSection(e, 'work'); handleNav();}}>Work</a></li>
                        <li className='p-2'><a href="#contact" onClick={(e) => {gotoSection(e, 'contact'); handleNav();}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar

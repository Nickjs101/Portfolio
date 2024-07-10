import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certs from "./components/Certs";
import Experience from "./components/Experience";
import Cyberprojects from "./components/Cyberprojects";
import AppProject1 from "./components/subcomponents/AppProject1";
import AppProject2 from "./components/subcomponents/AppProject2";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faLinux } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faCode, faBug, faDatabase, faFlag, faShieldHalved, faPeopleGroup, faLightbulb, faBookAtlas} from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux'
import projectStorage from './components/subcomponents/projectStorage'
import { useState, useCallback } from "react";

library.add(faGoogle,faCode,faBug,faLinux,faDatabase,faFlag,faShieldHalved,faPeopleGroup,faLightbulb,faBookAtlas);

function App() {

  const [currentContent, setCurrentContent] = useState('Main');
  const [projectComponent, setprojectComponent] = useState(<Navbar/>);
  const [projectCategory, setprojectCategory] = useState('SoftwareDev');

  const displayProject = useCallback((Component, Category) => {
    setprojectComponent(Component);
    setprojectCategory(Category);
    setCurrentContent('Projects');
  }, []);

  const renderContent = useCallback(() => {
    if (currentContent == 'Projects') {
      return (
        <Provider store={projectStorage}>
          <Cyberprojects  projectComponent={projectComponent} category={projectCategory} setprojectComponent={setprojectComponent} setprojectCategory={setprojectCategory} setCurrentContent={setCurrentContent} />
        </Provider>
      );
    }
    return (
      <>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Certs/>
        <About/>
        <Experience/>
        <Provider store={projectStorage}>
          <Work displayProject={displayProject}/>
        </Provider>
        <Contact/>
        <Footer/>
      </>
    );
  }, [currentContent, projectComponent, projectCategory, displayProject]);

  return (
    <div className="App">
      {renderContent()}
    </div>
  )
}

export default App;

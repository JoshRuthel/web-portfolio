import Card from "./components/Card";
import Welcome from "./components/Welcome";
import About from "./components/About";
import { useRef, useState } from "react";
import logo from "./JRlogo.png";
import CV from "./Josh-CV.pdf";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ListOutline } from 'react-ionicons'
import { CloseOutline } from 'react-ionicons'
import MyCarousel from "./components/MyCarousal";
import BSCarousel from "./components/BSCarousel";
import Bottom from "./components/Bottom";
import { AccessibilityOutline } from 'react-ionicons'
import { ConstructOutline } from 'react-ionicons'
import { CodeSlashOutline } from 'react-ionicons'
import { OptionsOutline } from 'react-ionicons'
import { PeopleOutline } from 'react-ionicons'
import { MailUnreadOutline } from 'react-ionicons'
import { DocumentTextOutline } from 'react-ionicons'

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const welcomeRef = useRef(null);
  const navButton =
    "text-white rounded-xl px-3 py-1 hover:bg-indigo-500 hover:text-black cursor-pointer";

  const handleClick = () => {
    document.getElementById("welcome").classList.remove('hidden')
    closeClicked()
    aboutRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const handleSkillClick = () => {
    document.getElementById("welcome").classList.remove('hidden')
    closeClicked()
    skillsRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const handleProjectClick = () => {
    document.getElementById("welcome").classList.remove('hidden')
    closeClicked()
    projectRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  };

  const [menuClick, setMenuClick] = useState(false)

  const menuClicked = () => {
    setMenuClick(true)
    document.getElementById("nav").classList.remove('top-[-100%]')
    document.getElementById("nav").classList.add('top-[4%]')
    document.getElementById("welcome").classList.add('hidden')
  }

  const closeClicked = () => {
    setMenuClick(false)
    document.getElementById("nav").classList.remove('top-[4%]')
    document.getElementById("nav").classList.add('top-[-100%]')
    document.getElementById("welcome").classList.remove('hidden')
  }

  const topClicked = () => {
    welcomeRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <Card>
      <div class="bg-black">
        <nav class=" flex justify-between w-[98%] mx-auto">
          <div>
            <img src={logo} class="w-20" alt="logo"></img>
          </div>
          <div id="nav" class="md:static md:min-h-fit absolute mt-3 min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 bg-black">
            <ul class="flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-8">
              <div class="flex flex-row">{menuClick && <AccessibilityOutline color={'#ffffff'} width="13px"/>} <a class={navButton} onClick={handleClick}>
                About
              </a></div>
             <div class="flex flex-row">{menuClick && <OptionsOutline color={'#ffffff'} width="13px"/>} <a class={navButton} onClick={handleSkillClick}>
                Skills
              </a></div>
              <div class="flex flex-row">{menuClick && <CodeSlashOutline color={'#ffffff'} width="13px"/>} <a
                class={navButton}
                href="https://github.com/JoshRuthel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a></div>
              <div class="flex flex-row">{menuClick && <ConstructOutline color={'#ffffff'} width="13px"/>} <a
                class={navButton}
                onClick={handleProjectClick}
              >
                Projects
              </a></div>
              <div class="flex flex-row">{menuClick && <PeopleOutline color={'#ffffff'} width="13px"/> } <a
                class={navButton}
                href="https://www.linkedin.com/in/joshua-ruthel-48b731225/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a></div>
              <div class="flex flex-row">{menuClick && <MailUnreadOutline color={'#ffffff'} width="13px"/>} <a class={navButton} href="mailto:joshuaruthless@gmail.com">
                Email
              </a></div>
              <div class="flex flex-row">{menuClick && <DocumentTextOutline color={'#ffffff'} width="13px"/>} <a
                class={navButton}
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a></div>
            </ul>
          </div>
          <div class="cursor-pointer md:hidden flex mr-4 mt-4">
                {menuClick ? <CloseOutline color={'white'} onClick={closeClicked}/> : <ListOutline color={'#ffffff'} onClick={menuClicked}/>}
              </div>
        </nav>
      </div>
      <div id="welcome" ref={welcomeRef}><Welcome /></div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectRef}>
        <BSCarousel/>
      </div>
      <div>
        <Bottom topClicked={topClicked}/>
      </div>
    </Card>
  );
}

export default App;

import Layers from "./Layers";
import Front from "./Front";
import Tools from "./Tools";
import Back from "./Back";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useEffect, useState } from "react";

const Skills = () => {
  const [frontFlag, setFrontFlag] = useState(false);
  const [toolFlag, setToolFlag] = useState(false);
  const [backFlag, setBackFlag] = useState(false);
  const [currentFilt, setCurrentFilt] = useState("Pick Layer")
  const [isMobile, setIsMobile] = useState(false)



  useEffect(() => {
    if(window.innerWidth < 700) {
      setIsMobile(true)
      console.log('Here')
    }
  }, [])

  const handleDrop = () => {
    document.getElementById("list").classList.remove("hidden")
    document.getElementById("list").classList.add("flex")
    setCurrentFilt("Pick Layer")
  }

  const handleClick = (e) => {
    document.getElementById("list").classList.add("hidden")
    setCurrentFilt(e)
  }

  return (
    <div>
      <div class="h-20"></div>
      <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
          <div class="flex justify-center mt-20">
            <h2 class="text-3xl text-white animate-bounce">Skills</h2>
          </div>
        </AnimatedOnScroll>
      <div class="flex justify-center mt-20">
        <AnimatedOnScroll animationIn="slideInUp" animationOut="slideOutUp">
          <div class="bg-indigo-500 rounded-xl px-4 py-4">
            <h2 class="text-black shadow-xl md:text-2xl text-md">
              Apps are like onions, they have layers
            </h2>
            <h2 class="text-black shadow-xl md:text-2xl text-md">
              Hover over/Tap one to see my skills
            </h2>
            <div class="flex justify-center mt-2 md:hidden mx-auto">
          <div class="flex flex-col bg-indigo-500 rounded-xl">
      <ul>
        <button onClick={handleDrop} class="cursor-pointer px-2 py-1 bg-indigo-500 shadow-md rounded-xl text-black text-sm underline italic">{currentFilt}</button>
        <div id="list" class="hidden flex-col">
          <button onClick={() => handleClick("Front-End")} class="cursor-pointer px-2 py-1 bg-indigo-500 shadow-md rounded-xl text-black text-sm underline italic">Front-End</button>
          <button onClick={() => handleClick("Tools")} class="cursor-pointer px-2 py-1 bg-indigo-500 shadow-md rounded-xl text-black text-sm underline italic ">Tools</button>
          <button onClick={() => handleClick("Back-End")} class="cursor-pointer px-2 py-1 bg-indigo-500 shadow-md rounded-xl text-black text-sm underline italic">Back-End</button>
        </div>
      </ul>
    </div>
    </div>
          </div>
        </AnimatedOnScroll>
      </div>
      <div class="flex justify-center">
        <div class="w-[50%]">
        <AnimatedOnScroll
          animationIn="slideInRight"
          animationOut="slideOutRight"
        >
          <div class="w-[70%]">
            <Layers
              setFront={setFrontFlag}
              setTool={setToolFlag}
              setBack={setBackFlag}
              filt={currentFilt}
              mobile={isMobile}
            />
          </div>
        </AnimatedOnScroll>
        </div>
        <div class="mt-20 w-[40%]">
          <AnimatedOnScroll
            animationIn="slideInRight"
            animationOut="slideOutRight"
          >
            {frontFlag ? (
              <Front />
            ) : toolFlag ? (
              <Tools />
            ) : backFlag ? (
              <Back />
            ) : (
              <img
                src={
                  "https://media.tenor.com/3rBKRUD8UNEAAAAC/layers-jackets.gif"
                }
                alt="Loading..."
                class="mt-8 rounded-3xl w-[90%] md:w-[60%]"
              />
            )}
          </AnimatedOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Skills;

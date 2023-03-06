import Layers from "./Layers";
import Front from "./Front";
import Tools from "./Tools";
import Back from "./Back";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useState } from "react";

const Skills = () => {
  const [frontFlag, setFrontFlag] = useState(false);
  const [toolFlag, setToolFlag] = useState(false);
  const [backFlag, setBackFlag] = useState(false);

  return (
    <div>
      <div class="h-20"></div>
      <div class="flex justify-center mt-20">
        <AnimatedOnScroll animationIn="slideInUp" animationOut="slideOutUp">
          <div class="bg-indigo-500 rounded-xl px-4 py-4">
            <h2 class="text-white shadow-xl italic text-2xl">
              Apps are like onions, they have layers
            </h2>
            <h2 class="text-white shadow-xl italic text-2xl">
              Hover over/Tap one to see my skills
            </h2>
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

import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Welcome() {
  return (
    <AnimatedOnScroll animationIn="rotateInUpLeft" animationOut="rotateOutUpLeft">
      <div class="flex justify-center my-80 md:w-auto w-[80%] mx-auto">
        <div class="flex flex-col">
          <div class="flex justify-start">
            <h1 class="text-white text-3xl md:text-4xl font-sans">Hi,my name is </h1>
            <h1 class="text-indigo-500 text-3xl md:text-4xl ml-3 animate-bounce">Josh</h1>
          </div>
          <div>
            <h1 class="text-white text-3xl md:text-4xl">I am a Software Engineer</h1>
          </div>
          <div>
            <h1 class="text-white text-3xl md:text-4xl text-bold">
              Welcome to my page webpage
            </h1>
          </div>
        </div>
      </div>
    </AnimatedOnScroll>
  );
}

export default Welcome;

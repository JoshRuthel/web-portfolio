import logo from "../About.gif";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function About() {
  return (
    <div class="flex flex-col w-[80%] mx-auto">
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
      <div class="flex justify-center md:mt-10">
        <h1 class="text-3xl text-white font-bold text-shadow animate-bounce mt-8">
          A short introduction...
        </h1>
      </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="flipInX" animationOut="flipOutX">
      <div class="bg-indigo-500 rounded-xl shadow-xl px-4 py-4 mt-8">
        <p class="text-black md:text-xl ml-4 md:ml-10 mt-1 font-bold shadow-md">
          I am 21 years old and currently in my Honours year of Information
          Engineering at Wits{" "}
        </p>
        <p class="text-black md:text-xl ml-4 md:ml-10 mt-1 font-bold shadow-md">
          I started my software journey in 2020 and I am constantly trying
          better my skillset
        </p>
        <p class="text-black md:text-xl ml-4 md:ml-10 mt-1 font-bold shadow-md">
          I enjoy all things technology including Artifical Intelligence, Cyber
          Security and Software Development
        </p>
        <p class="text-black md:text-xl ml-4 md:ml-10 mt-1 font-bold shadow-md">
          Outside of my studies I enjoy lifting weights, and spending quality
          time with loved ones
        </p>
        <p class="text-black md:text-xl ml-4 md:ml-10 mt-1 font-bold shadow-md">
          I enjoy to be challenged and solving problems, which is why I feel
          at home as a programmer
        </p>
      </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="slideInUp" animationOut="slideOutDown">
     <div class="flex justify-center"><img src={logo} class="mt-10 rounded-xl w-[60%] md:w-[30%]"></img></div>
      </AnimatedOnScroll>
    </div>
  );
}

export default About;

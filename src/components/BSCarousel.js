import Carousel from "react-bootstrap/Carousel";
import Frost from "../FrostB.gif";
import { CodeSlashSharp } from "react-ionicons";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function BSCarousel() {
  return (
    <div class="flex justify-center">
      <div class="md:w-[50%] w-[90%] my-20">
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
          <div class="flex justify-center mt-20 mb-10">
            <h2 class="text-3xl text-white animate-bounce">My Projects</h2>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="flipInX" animationOut="flipOutX">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 opacity-70"
                src={Frost}
                alt="First slide"
              />
              <Carousel.Caption>
                <div class="bg-white border rounded-xl border-black">
                  <p class="text-black text-sm md:text-md shadow-lg px-2 py-2 font-bold underline">
                    FROSTBITE ARCADE GAME
                  </p>
                  <p class="text-black text-xs md:text-md shadow-lg px-2 py-2">
                    A retro arcade game constructed using
                    object-oriented-progamming.
                  </p>
                  <p class="text-black text-xs md:text-md shadow-lg px-2 py-2">
                    Built with the SFML library that runs with C++
                  </p>
                  <div class="bg-indigo-500 rounded-xl flex justify-center">
                    <a>
                      <CodeSlashSharp
                        color={"#00000"}
                        height="25px"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 opacity-70"
                src="https://cdn.dribbble.com/users/410417/screenshots/2021100/badge-web.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div class="bg-white border rounded-xl border-black">
                  <p class="text-black text-sm md:text-md shadow-lg px-2 py-2 font-bold underline">
                    REACT WEBAPP
                  </p>
                  <p class="text-black text-xs md:text-md shadow-lg px-2 py-2">
                    An interactive webapp constructed with the React.js library
                    and hosted on Github Pages
                  </p>
                  <p class="text-black text-xs md:text-md shadow-lg px-2 py-2">
                    The codebase includes the TailwindCSS library amongst others
                  </p>
                  <div class="bg-orange-500 rounded-xl flex justify-center">
                    <a href="https://github.com/JoshRuthel/web-portfolio">
                      <CodeSlashSharp
                        color={"#00000"}
                        height="25px"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}

export default BSCarousel;

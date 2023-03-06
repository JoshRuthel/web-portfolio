import BSCarousel from "./BSCarousel"

const MyCarousel = () => {

    return(
        <div class="grid grid-rows-2 place-items-center">
            <h2 class="text-3xl text-white animate-bounce">My Projects</h2>
            <div class="md:w-[80%] w-[95%]"><BSCarousel/></div>
        </div>
    )

}

export default MyCarousel
const Front = () => {
  return (
    <div class="w-[100%]">
      <div class="flex justify-evenly mt-20 w-[90%]">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/919/919828.png"}
          alt="Javascript, HTML, CSS"
          class=" w-[15%]"
        />
        <img
          src={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"
          }
          alt="html"
          class=" w-[15%]"
        />
        <img
          src={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          }
          alt="css"
          class=" w-[15%]"
        />
        <img
          src={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--zKQJKp9C--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png"
          }
          class="rounded-2xl  w-[15%]"
        />
      </div>
      <div class="flex justify-evenly mt-10">
        <img
          src={
            "https://www.datocms-assets.com/14946/1638186862-reactjs.png?auto=format&w=1000"
          }
          alt="react"
          class="rounded-2xl  w-[25%]"
        />
        <img
          src={
            "https://typeofnan.dev/static/7d24a5049765ab5e2d535e571def080e/c1b63/redux.png"
          }
          alt="redux"
          class="rounded-2xl  w-[25%]"
        />
      </div>
      <div class="mt-5 flex justify-center">
        <img
          src={
            "https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png"
          }
          alt="typescript"
          class="rounded-2xl  w-[25%]"
        />
      </div>
    </div>
  );
};

export default Front;

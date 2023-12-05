import React from "react";
import footage from "../assets/footage.mp4";

const Bloc1 = () => {
  return (
    <div className="p-4 border border-gray-500 flex flex-col gap-4 w-full text-center md:text-left align-center mx-auto justify-center lg:justify-start h-full">
  <div>
    <p className="text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-extrabold lg:justify-center text-center lg:text-start">
      Within the ode to webcraft
    </p>
    <p className="pt-2 lg:justify-center text-center lg:text-start">Weaving lines of code</p>
  </div>

  <div className="h-60 lg:h-52 xl:h-64 2xl:h-72 3xl:h-96  w-full overflow-hidden rounded-md">
    <div className="relative w-full h-full">
      <video
        style={{ width: '100%' }}
        className="relative mx-auto lg:m-0 object-cover h-full"
        src={footage}
        type="video/mp4"
        autoPlay
        loop
        playsInline
        muted
      />
      <div className="p-2 absolute top-0 left-0 sm:left-24 md:left-40 lg:left-0 bottom-0 flex justify-start items-end">
        <p className="text-white text-left text-4xl font-bold">
          WEB.DEV <br></br>UI/UX
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Bloc1;

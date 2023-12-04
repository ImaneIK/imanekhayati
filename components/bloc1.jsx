import React from "react";
import footage from "../assets/footage.mp4";

const Bloc1 = () => {
  return (
    <div className=" p-4 border border-gray-500 flex flex-col gap-8 w-full text-center align-center mx-auto justify-center lg:justify-start h-full">
      <div>
        <p className="text-4xl md:text-5xl font-extrabold" >
        <span >Withing the ode to webcraft.</span>
        </p>
      </div>

      <div className=" h-64 w-full overflow-hidden rounded-md ">
        <div className="relative w-full h-full">
          <video
            className="mx-auto lg:m-0 object-cover"
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

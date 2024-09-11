import React from 'react';
import Link from 'next/link';
import { useTheme } from "@/pages/_app";

const CardGrid = ({title,description,link,thumbnail }) => {
  const { theme } = useTheme();
  const lightThemeClass = "block bg-cover bg-center  rounded-[8vh] p-[5vh] shadow-xl transition  border border-blue-700  hover:border-blue-300/10 hover:shadow-blue-800/10"; 
  const darkThemeClass = "block bg-cover bg-center rounded-[8vh] p-[5vh] shadow-xl transition  border border-gray-200 hover:border-indigo-500/10 hover:shadow-indigo-500/10";
  
  let backgroundImage;
  let hasThumbnail = false;
  if (thumbnail) {
    backgroundImage = thumbnail;
    hasThumbnail = true;
  } else {
    backgroundImage = theme === 'dark' ? "/images/thumbnail_dark_mode.jpg" : "/images/thumbnail_light_mode.jpg";
  }

  return (
    <div className="">

<Link href={`/project/${link}`} className="relative  flex flex-col justify-end overflow-hidden rounded-md px-[5vh] pb-[5vh] pt-[15vh]   ">
    <span style={{ backgroundImage: `url(${backgroundImage})` }}  className="absolute inset-0 w-full bg-cover bg-center"></span>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-[5vh] font-bold text-white">{title}</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-[2.5vh] leading-[3vh] text-gray-300">{description}</div>
</Link>
    
    </div>
  );
};
export default CardGrid;
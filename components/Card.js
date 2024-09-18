import React from 'react';
import Link from 'next/link';
import { useTheme } from "@/pages/_app";

const CardGrid = ({title,description,link,thumbnail,url }) => {
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

<div className="relative flex-1  flex flex-col justify-end overflow-hidden rounded-md px-[4vh] pb-[4vh] pt-[12vh]   ">
     { url && (<Link href={`${url}`} className=' block'>    
    <svg className='absolute top-4 right-4 z-40 h-[3vh] w-[3vh] fill-white text-white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
    </Link> )}
    <span style={{ backgroundImage: `url(${backgroundImage})` }}  className="absolute inset-0 w-full bg-cover bg-center"></span>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <Link className='z-10' href={`/project/${link}`}>
    <h3 className=" mt-3 text-[4vh] font-bold text-white">{title}</h3>
    <div className=" gap-y-1 overflow-hidden text-[2.5vh] leading-[3vh] text-gray-300">{description}</div>
    </Link>
   
</div>
    
    </div>
  );
};
export default CardGrid;
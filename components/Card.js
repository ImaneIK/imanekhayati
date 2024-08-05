import React from 'react';
import Link from 'next/link';
import { useTheme } from "@/pages/_app";

const CardGrid = ({title,description,link,thumbnail }) => {
  const { theme } = useTheme();
  const lightThemeClass = "block bg-cover bg-center h-full w-full  rounded-xl p-8 shadow-xl transition  border border-blue-700  hover:border-blue-300/10 hover:shadow-blue-800/10"; 
  const darkThemeClass = "block bg-cover bg-center h-full w-full rounded-xl p-8 shadow-xl transition  border border-gray-200 hover:border-indigo-500/10 hover:shadow-indigo-500/10";
  
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

<Link href={`/project/${link}`} className="relative  flex flex-col justify-end overflow-hidden rounded-md px-8 pb-8 pt-24 max-w-sm ">
    <span style={{ backgroundImage: `url(${backgroundImage})` }}  className="absolute inset-0 h-full w-full bg-cover bg-center"></span>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{description}</div>
</Link>
     
        {/* <Link
          className={`${theme === 'dark' ? 
            darkThemeClass : 
            lightThemeClass} 
            ` }
          href={`/project/${link}`}
          style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '200px' }}
        >
         
          <div  className={` ${thumbnail ? 'opacity-0 hover:opacity-100 transition-opacity duration-300 ' : 'opacity-100'}`}>
              <svg
              className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-bold ">
                {title}
              </h2>
              <p className="mt-1 text-sm">{description}</p>
        
          </div>
          </Link> */}
    
    </div>
  );
};
export default CardGrid;
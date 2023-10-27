import React from 'react';
import Link from 'next/link';
import { useTheme } from "@/pages/_app";
import cardsData from './data.json';  

const CardGrid = ({title,description,link}) => {
  const { theme } = useTheme();
  const lightThemeClass = "block rounded-xl border p-8 shadow-xl transition  border border-green-700  hover:border-green-300/10 hover:shadow-green-800/10"; 
  const darkThemeClass = "block rounded-xl border p-8 shadow-xl transition  border border-gray-200 hover:border-indigo-500/10 hover:shadow-indigo-500/10";
  return (
    <div className="mt-4">
     
        <Link
          className={theme ===  'dark' ? darkThemeClass : lightThemeClass}
          href={`/project/${link}`}
        >
          {/* href={`/project/${card.slug}`} */}
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
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
          <h2 className="mt-4 text-xl font-bold ">{title}</h2>
          <p className="mt-1 text-sm ">{description}</p>
        </Link>
    
    </div>
  );
};

export default CardGrid;



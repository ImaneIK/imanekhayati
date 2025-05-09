import clientPromise from "/lib/mongodb";
import Toggle from '@/components/Toggle';
import { useTheme } from "@/pages/_app";
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import logo from '/public/logo1.png';
import Menu from '/components/menu';
import Card from '/components/Card';

export async function getServerSideProps() {
  try {
      const client = await clientPromise;
      const db = client.db("portfolio");

      const projects = await db
          .collection("projects")
          .find({})
          .sort({ metacritic: -1 })
          .toArray();

      return {
          props: { projects: JSON.parse(JSON.stringify(projects)) },
      };
  } catch (e) {
      console.error(e);
  }
}


const Portfolio = ({projects}) => {  
  const { theme } = useTheme();
  const darktimageSrc="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const lightimageSrc="https://images.pexels.com/photos/9436715/pexels-photo-9436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 


  return (
    <div className='pb-24 md:pb-0'>
      <Menu />
    <div className="flex h-screen overflow-x-hidden">
      
      {/* sidebar */}
      <div  className='invisible md:visible  w-[5vw] fixed flex flex-col justify-between p-2 h-full border-r border-gray-800'>
        <div className=" mb-[5vh]">
            <a className='text-gray-500 font-semibold text-[5vh]' href="/"><p className="font-extrabold text-center text-[5vh]">IK</p>
            </a>
            <div className="mt-[5vh]">
              <ul>
                {/* home */}
                <li className="mb-[5vh]">
                  <a href="/">
                    <span>
                    <svg className="fill-current h-[4vh] w-[4vh] mx-auto " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><path d="M320 33.8V160H48.5C100.2 82.8 188.1 32 288 32c10.8 0 21.5 .6 32 1.8zM352 160V39.1C424.9 55.7 487.2 99.8 527.5 160H352zM29.9 192H96V320H0c0-46 10.8-89.4 29.9-128zM192 320H128V192H448V320H384v32H576v80c0 26.5-21.5 48-48 48H352V352c0-35.3-28.7-64-64-64s-64 28.7-64 64V480H48c-26.5 0-48-21.5-48-48V352H192V320zm288 0V192h66.1c19.2 38.6 29.9 82 29.9 128H480z"/></svg>
                    </span>
                  </a>
                </li>
                {/* portfolio */}
                <li className="mb-[5vh]">
                  <a href="/portfolio">
                    <span>
                    <svg className="fill-current h-[4vh] w-[4vh] mx-auto" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>
                    </span>
                  </a>
                </li>
                {/* about */}
                <li className="mb-6">
                  <a href="/about">
                    <span>
                    <svg className="fill-current h-[4vh] w-[4vh] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </span>
                  </a>
                </li>
                  
              </ul>
            </div>
        </div>
        
        <div className="mb-4 ">
        <div  className=" my-4"> <Toggle/> </div>
            <a href="/#contact">
              <span>
              <svg className="fill-current h-[4vh] w-[4vh] mx-auto " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"/></svg>
              </span>
            </a>
        </div>
      </div>


      <div className='flex flex-col gap-[5vh] md:ml-[11vh]  w-full '>
        <div className='relative'>
           
           <Image 
           fill="true" 
          //  Web 1920 – 4
           src={theme == 'dark' ? darktimageSrc : lightimageSrc} alt="Image"
           // sizes='(max-width:768px) 100vw, 7OOpx'
           priority
           objectFit="cover"
           className=' -z-10 object-contain '
           />
    
         
           <div  className="  mx-auto px-4 py-8 sm:px-4 lg:px-[10vh] ">

             <div className="mt-[10vh] text-center md:text-left mb-[2vh]">
            
             <h2 className="text-3xl font-extrabold text-gray-100 sm:text-[6vh]">
          Explore our projects
          </h2>

          <p className="mt-[4vh] text-[3vh] text-gray-100">
          Discover a curated selection of our projects, crafted with passion and dedication.
          </p>
             </div>

             <div className="hidden flex flex-col md:flex-row items-center md:justify-between md:gap-4">
               <div className="relative ">
                 <label className="sr-only" for="search"> Search </label>

                 <input
                   className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                   id="search"
                   type="search"
                   placeholder="Search ..."
                 />

                 <button
                   type="button"
                   className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                 >
                   <span className="sr-only">Search</span>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-4 w-4"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     stroke-width="2"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                     />
                   </svg>
                 </button>
               </div>

               <div
                 className=" flex flex-1   items-center justify-between gap-8 sm:justify-end"
               >
                 <div className="flex gap-4">
                   <button
                     type="button"
                     className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                   >
                     <span className="sr-only">Search</span>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       stroke-width="2"
                     >
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                       />
                     </svg>
                   </button>

                   <a
                     href="#"
                     className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                   >
                     <span className="sr-only">Academy</span>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       stroke-width="2"
                     >
                       <path d="M12 14l9-5-9-5-9 5 9 5z" />
                       <path
                         d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                       />
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                       />
                     </svg>
                   </a>

                   <a
                     href="#"
                     className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                   >
                     <span className="sr-only">Notifications</span>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       stroke-width="2"
                     >
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                       />
                     </svg>
                   </a>
                 </div>

                 <button
                   type="button"
                   className="group flex shrink-0 items-center rounded-lg transition"
                 >
                   <span className="sr-only">Menu</span>
                   {/* <img
                     alt="Man"
                     src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                     clasName=="h-10 w-10 rounded-full object-cover"
                   /> */}

                   <p className="ms-2  text-left text-xs sm:block">
                     <strong className="block font-medium">Imane Khayati</strong>

                     <span className="text-gray-500"> imane.khayati@e-polytechnique.ma </span>
                   </p>

                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="ms-4  h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       fillRule="evenodd"
                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                       clipRule="evenodd"
                     />
                   </svg>
                 </button>
               </div>
             </div>

           </div>
       </div>

       <div className='mx-auto px-4 py-6 md:mx-8 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[4vh] '>
                {projects.map((project,index) => (
                     <Card key={project.slug || index}  title={project.title} description={project.description} link={project.slug} thumbnail={project.thumbnail}/>
                ))}
        </div>

        </div>
      </div>
    </div>

  );
};

export default Portfolio;


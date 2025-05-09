import styles from "./Home.module.css";
import { useTheme } from "@/pages/_app";
import Menu from "/components/menu";
import Navbar from "/components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import Bloc1 from "@/components/bloc1";
// import footage from "../assets/footage.mp4";
import bloc from "../assets/bloc.jpeg";
import iceball from "../assets/iceball.png";
import darkicecube from "../assets/darkiceball-removebg-preview.png";

export default function Home() {
  const { theme } = useTheme();
  const lightThemeClass = " border border-blue-600  w-12 h-0 p-3  mx-auto";
  const darkThemeClass = " border border-gray-200 w-12 h-0  mx-auto";
  const lightThemehero =
    "block backdrop-blur-md border border-blue-800 flex flex-col rounded-xl w-full h-full p-4 md:p-12 lg:p-4 overflow-hidden";
  const darkThemehero =
    "block bg-indigo-500 border border-gray-500 bg-opacity-10 backdrop-blur-md flex flex-col gap-4 rounded-xl w-full h-full p-4 md:p-12 lg:p-4 overflow-hidden";

  return (
    <div className="h-max lg:h-screen" style={{ position: "relative", padding: "2vw" }}>
      <Menu />
      <div className={theme == "dark" ? darkThemehero : lightThemehero}>
        <Navbar />

        <div  className="flex flex-col-reverse lg:h-screen justify-start lg:flex-row-reverse w-full 2xl:hidden">
          
          <div className="hidden md:flex flex-col justify-start w-full lg:w-1/4 ">
            <div className=" p-6 lg:px-2 border border-gray-500 flex flex-col h-min">
              <p className="block text-8xl 2xl:text-[8.7rem] font-extrabold">0.2</p>
              <p className="px-2 ">version</p>
            </div>

            <div className=" border border-gray-500 h-full">
              <div className="relative w-full h-full  object-cover">
                <Image
                  className="object-cover bg-center mx-auto min-h-full w-screen lg:w-full"
                  src={bloc}
                  layout="cover"
                ></Image>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col justify-start w-full lg:w-1/4 align-center h-full text-center lg:text-start">
            <div className=" p-4 border border-gray-500 flex flex-col lg:flex-row items-center  gap-4 h-max">
              <p className=" block text-[6vh] font-extrabold  w-full ">
                Let's connect!
              </p>
              <div className="w-fit flex flex-row lg:flex-col  gap-2 items-center justify-center px-2 mx-auto">
                <a href="https://github.com/ImaneIK">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-5 h-5 2xl:w-8 2xl:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/imane-khayati-5169b11a9/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-5 h-5 2xl:w-8 2xl:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a href="mailto:imane.khayati@e-polytechnique.ma">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-5 h-5 2xl:w-8 2xl:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/c_imane_btw/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-5 h-5 2xl:w-8 2xl:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" p-4 border border-gray-500 flex flex-col h-full justify-center lg:justify-start xl:justify-center">
              <div className="flex flex-col justify-center">
                <p className="block text-4xl xl:text-5xl 2xl:text-[4.7rem] font-extrabold py-2">I'm Imane!</p>
                <p className=" block text-xs md:text-sm 2xl:text-xl  w-full ">
                Full-Stack Web Developer specializing in landing pages, business websites, e-commerce platforms, and UI/UX consulting. Contact me via email for inquiries or service requests.
                </p>
              </div>
            </div>

          </div>

          <div  className=" w-full lg:w-2/4 justify-start h-full">
            <Bloc1></Bloc1>
          </div>

        </div>


        {/* on screen>2xl display */}
        <div className="hidden 2xl:flex flex-row  items-center justify-center mx-auto px-[10vw]">
            <div className="w-1/2 flex flex-col ">
            <div className=" flex flex-col items-start justify-left">
                    <p className="block text-[10vh] font-extrabold py-2">I'm Imane!</p>
                    <p className=" block text-gray-400  text-[2.5vh]  2xl:leading-relaxed  w-full ">
                      I am a web developer specializing in Node.js, 
                      dedicated to crafting seamless and dynamic web experiences. 
                      My expertise spans UI design, UX analysis, 
                      and full-stack web application development. 
                      
                      Explore my work and let’s build something amazing together!
                    </p>


                     {/* cta */}
                      <div className=" text-center my-[2vh]  text-[1.9vh]">
                    <a
                      href="/portfolio"
                      className={theme === "light" ? "p-[1vh] border border-1 border-indigo-500 rounded-md" : "p-[1vh] border border-1 border-gray-200 rounded-md"}     >
                        Explore my work
                    </a>
            </div>
             

              {/* socials */}
            <div className=" flex flex-row  gap-2 py-3">
                <a href="https://github.com/ImaneIK">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-[3.5vh] h-[3.5vh] "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/imane-khayati-5169b11a9/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-[3.5vh] h-[3.5vh]  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
                <a href="mailto:imane.khayati@e-polytechnique.ma">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-[3.5vh] h-[3.5vh]  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/c_imane_btw/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    className=" w-[3.5vh] h-[3.5vh]  "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>

              
            </div>
            
            </div>
           

              <div className=" w-1/2 px-[2vw] py-[1vh] flex justify-center items-center">
                <div className="flex flex-col  justify-center items-center">
                <div>

                <Image
                  className="mx-auto animate-float rounded-lg h-[80vh] w-full object-cover bg-center "
                  src={theme === "dark" ? darkicecube : iceball}
                  layout="cover"
                ></Image>
                {/* Faint ground illumination */}
                  {/* <div className="absolute  w-64 h-64 bg-gradient-to-t from-blue-400 to-transparent rounded-full opacity-20 blur-xl animate-pulse-slow"></div> */}
                 
                </div >
                 <div className="mx-auto absolute bottom-[20vh] 5xl:bottom-[30vh] w-[60vh] h-[60vh] bg-gradient-to-t from-blue-400 to-transparent rounded-full opacity-20 blur-[5vh] 3xl:blur-2xl animate-glow"></div>
                </div>
                
              </div>
        </div>
      </div>
    </div>
  );
}
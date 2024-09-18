import Navbar from '/components/navbar'
import Footer from '/components/Footer'
import Menu from '/components/menu'

export default function About() {
  const googleDriveLink =
    "https://drive.google.com/file/d/15ajVIrGgfJNLY7382Ud-QwZtz-8Tgp9w/view?usp=sharing ";
  const fr_cv_link = "https://drive.google.com/file/d/1rR_MNM5-3trBBE-pPl-ZUId00WheBhb7/view?usp=sharing";
  return (
    <div className="p-6">
      <Menu />
      <Navbar className="p-6"/>

      <div className="pt-6 relative overflow-x-hidden gap-[3vh] md:px-4 lg:px-24 flex flex-col md:flex-row w-full">
        <div className="w-full flex flex-col gap-[3vh] md:w-1/3">
          {/* Name and cv link */}
         
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h1 className="mt-4 text-[4vh] font-bold ">
              Imane Khayati
            </h1>
            <p className="mt-1 text-[2vh] ">Web Developer</p>
             {/* Fr link */}
          <a className='block'
              href={fr_cv_link}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="my-4 text-[1.7vh] p-[1vh] rounded-md border border-gray-800">
                Download Resume (FR)
              </button>
            </a>

            {/* CVs */}
             {/* <div className='flex flex-nowrap gap-2'>
            <a className='block'
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="my-4 text-xs p-2 rounded-md border border-gray-800">
                English CV
              </button>
            </a>
          <a className='block'
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="my-4 text-xs p-2 rounded-md border border-gray-800">
                Frensh CV
              </button>
            </a>
            </div>  */}
            
          </div>

          
          

          {/* infos */}
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-[4vh] font-bold ">Information</h2>

            <div className="flex items-center justify-between">
              <p className="mt-1 text-[2vh] ">Objective</p>
              <p className="mt-1 text-[2vh]">Entry level role</p>
            </div>

            

            <div className="flex items-center justify-between">
              <p className="mt-1 text-[2vh]">Relocation</p>
              <p className="mt-1 text-[2vh]">Yes</p>
            </div>
          </div>


          {/* skills */}
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh] "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-[4vh] font-bold ">Skills</h2>
            {/*  */}
            <div className="grid grid-cols-3 gap-[2vh] text-[2vh]  ">
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">Next.js</p>
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">Nuxt.js</p>
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">MongoDB</p>
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">Tailwind</p>
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">Node.js</p>
              <p className="mt-1 text-center border rounded-md p-2 border-gray-500">Flutter</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-[3vh] w-full md:w-2/3">
          {/* About me */}
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh] "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-[4vh] font-bold ">About me</h2>
            <p className="mt-1 text-[2vh] text-justify">
              I'm a passionate web developer with a love for coding and
              problem-solving and a determination to
              create user-friendly websites. As an enthusiastic
              learner, I'm always eager to explore new technologies and stay
              updated with the latest web development trends. My goal is to
              contribute to innovative projects and collaborate with like-minded
              professionals to achieve outstanding results. When I'm not coding,
              you'll find me experimenting with new coding challenges, seeking
              inspiration in design, or exploring the great outdoors. I'm
              excited to continue growing in the field of web development and
              make a positive impact through my work. Let's connect and create
              something amazing together!
            </p>
          </div>
          
          {/* experience */}
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh] "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-[4vh] font-bold ">Experiences</h2>
            <ul>

            <li className="py-4">
                <div className="flex justify-between">
                    <p className="mt-1 text-[2.5vh] font-semibold ">
                    End of Studies Internship | PFE
                    </p>
                    <p className="mt-1 text-[2.5vh] ">February to June 2024</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Host organization: Central Bank of Morocco </p>
                <p className="mt-1 text-[2.5vh]"> Theme: Conducting a sentiment analysis on the articles related to the monetary policy of the Central Bank of Morocco  </p>
                
              </li>


              <li className="py-4">
                <div className="flex justify-between">
                    <p className="mt-1 text-[2.5vh] font-semibold ">
                    Web Development Internship | PFA  
                    </p>
                    <p className="mt-1 text-[2.5vh] ">July & August 2023</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Host organization: DigitalClick </p>
                <p className="mt-1 text-[2.5vh]"> Theme: Creation and Implementation of a Coworking Reservation Theme using Nuxt.js  </p>
                
              </li>

             

              <li className="py-4">
                <div className="flex justify-between">
                    <p className="mt-1 text-[2.5vh] font-semibold">
                    FEECRA EXPO | Best Exhibition Stand Award  
                    </p>
                    <p className="mt-1 text-[2.5vh]">12 & 13 May 2023</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Host organization: UNIVERSIAPOLIS Agadir </p>
                <p className="mt-1 text-[2.5vh]"> Theme: Design and Development of an Intelligent Plant Disease Detection System implementing Machine Learning and React.js  </p>
              </li>

              <li className="py-4">
                <div className="flex justify-between">
                  <p className="mt-1 text-[2.5vh] font-semibold">
                    Web Development Internship | PFA
                    </p>
                    <p className="mt-1 text-[2.5vh]">July & August 2022</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Host organization: DigitalClick </p>
                <p className="mt-1 text-[2.5vh]"> Theme:
                  Design & development of a blogging system in Vue.js </p>
              </li>

              <li className="py-4">
                <div className="flex justify-between">
                  <p className="mt-1 text-[2.5vh] font-semibold">
                  Coordination of a Social Initiative
                    </p>
                    <p className="mt-1 text-[2.5vh]">May 12 2022</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Location: Universiapolis Agadir</p>
                <p className="mt-1 text-[2.5vh]"> Theme: “Blood Donation” in Partnership with the '9afilati' Initiative </p>
              </li>


              <li className="py-4">
                <div className="flex justify-between">
                  <p className="mt-1 text-[2.5vh] font-semibold">
                  Native Development Internship
                  | SFE
                    </p>
                    <p className="mt-1 text-[2.5vh]">April to June 2021</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Host organization: Agadir
                  multi-service autonomous agency (RAMSA).</p>
                <p className="mt-1 text-[2.5vh]"> Theme: Design and
                  Development of a Mobile Application for RAMSA Certificates </p>
              </li>


              <li className="py-4">
                <div className="flex justify-between">
                  <p className="mt-1 text-[2.5vh] font-semibold">
                   Final Academic Projects | PFE
                    </p>
                    <p className="mt-1 text-[2.5vh]">January to April 2021</p>
                </div>
                <p className="mt-1 text-[2.5vh]"> Organization: High School of Technology Agadir</p>
                <p className="mt-1 text-[2.5vh]"> Theme: Design
                  and Development of an E-Commerce Purchasing System for
                  Moroccan Artisanal Products </p>
              </li>

        
            </ul>
          </div>

          {/* education */}
          <div className="w-full block rounded-xl border border-gray-800 p-[3vh] shadow-xl transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[5vh] w-[5vh]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h2 className="mt-4 text-[4vh] font-bold">Education</h2>
            <ul>
              <li className="flex justify-between">
                <p className="mt-1 text-[2.5vh]">
                  Software Engineering Degree
                </p>
                <p className="mt-1 text-[2.5vh]">2021-2024</p>
              </li>
              <li className="flex justify-between">
                <p className="mt-1 text-[2.5vh]">
                  Diploma of technology in Computer Science (DUT)
                </p>
                <p className="mt-1 text-[2.5vh]">2019-2021</p>
              </li>
              <li className="flex justify-between">
                <p className="mt-1 text-[2.5vh]">
                  Baccalaureat in Physics (with honors)
                </p>
                <p className="mt-1 text-[2.5vh]">2018-2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

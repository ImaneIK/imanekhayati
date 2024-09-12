import '/styles/globals.css';
import clientPromise from "/lib/mongodb";
import Home from '../components/Home';
import Footer from '../components/Footer';
import Projects from '@/components/Projects';
import Form from '/components/form'
import Circles from '@/components/Circles';
import Card from '/components/Card'
import { useTheme } from "@/pages/_app";
import Carousel from '@/components/carousel';


  // let isConnected=false;


  export const getServerSideProps = async () => {
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
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    

    // return {
    //   props: { isConnected: true },
    // }
  } catch (e) {
    console.error(e)
    // return {
    //   props: { isConnected: false },
    // }
  }
}



export default function Root({ projects }) {

  const { theme } = useTheme();
  const lightThemeClass = " border border-blue-700  inline-block rounded-md bg-transparent border  px-[5vh] py-[2vh] text-[2vh] font-medium transition"; 
  const darkThemeClass = " border border-gray-200 inline-block rounded-md bg-transparent border  px-[5vh] py-[2vh] text-[2vh] font-medium transition";
 
  
  return (
    <div>
      

      <Home/>

      <Carousel/>

      {/* <Projects/> */}
 
      <div className="mx-auto flex flex-col gap-[4vh] items-center px-2 md:px-[10vh]">

        <div className="mx-auto py-[5vh] text-center">
          
          <h2 className="text-3xl font-extrabold  sm:text-[6vh]">
          Explore our projects
          </h2>

          <p className="mt-[3vh] text-[2vh]">
          Discover a curated selection of our projects, crafted with passion and dedication.
          </p>
        </div>

        <div className=' py-6 md:mx-8 md:p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[5vh]'>
                {projects.map((project,index) => (
                     <Card key={project.slug || index}  title={project.title} description={project.description} link={project.slug} thumbnail={project.thumbnail}/>
                ))}
        </div>
        
        {/* CTA button */}
        <div className="mt-[5vh]  text-center">
          <a
            href="/portfolio"
            className={theme === "light" ? lightThemeClass : darkThemeClass}
          >
            Explore more
          </a>
        </div>
      </div>
   

      

      <Form/>
      <Footer/>
    </div>
    
  );
}
